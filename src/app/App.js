define([
        'dojo/text!app/templates/App.html',

        'dojo/_base/array',
        'dojo/_base/lang',
        'dojo/_base/declare',
        'dojo/_base/Color',
        'dojo/dom',
        'dojo/on',
        'dojo/dom-construct',
        'dojo/aspect',

        'dijit/_WidgetBase',
        'dijit/_TemplatedMixin',
        'dijit/_WidgetsInTemplateMixin',
        'dijit/registry',
        'dijit/form/Button',

        'agrc/widgets/map/BaseMap',
        'agrc/widgets/locate/FindAddress',

        'ijit/widgets/notify/ChangeRequest',

        'esri/dijit/editing/Editor',
        'esri/dijit/AttributeInspector',
        'esri/layers/FeatureLayer',
        'esri/config',
        'esri/tasks/GeometryService',
        'esri/geometry/Extent',
        'esri/geometry/Point',
        'esri/tasks/query',
        'esri/symbols/SimpleMarkerSymbol',
        'esri/symbols/SimpleLineSymbol',

        'app/SlideInSidebar'
    ],

    function(
        template,
        array,
        lang,
        declare,
        Color,
        dom,
        on,
        domConstruct,
        aspect,
        _WidgetBase,
        _TemplatedMixin,
        _WidgetsInTemplateMixin,
        registry,
        Button,
        BaseMap,
        FindAddress,
        ChangeRequest,
        editor,
        AttributeEditor,
        featureLayer,
        config,
        geomService,
        Extent,
        Point,
        Query,
        SimpleMarkerSymbol,
        SimpleLineSymbol,
        SlideInSidebar
    ) {
        return declare("app.App", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
            // summary:
            //      The main widget for the app

            widgetsInTemplate: true,
            templateString: template,
            baseClass: 'app',

            // map: agrc.widgets.map.Basemap
            map: null,

            // findAddress: agrc/widgets/locate/FindAddress
            findAddress: null,

            // changeRequest: ijit/widgets/notify/ChangeRequest
            changeRequest: null,

            // sideBar: app/SlideInSidebar
            sideBar: null,

            // attributeEditor: esri/dijit/AttributeEditor
            attributeEditor: null,

            //selectQuery: esri/tasks/QueryTask
            selectQuery: null,

            //saveButton: dijit/form/Button
            saveButton: null,

            //updateFeature: esri/graphic
            updateFeature: null,

            constructor: function() {
                // summary:
                //      first function to fire after page loads
                console.info(this.declaredClass + "::" + arguments.callee.nom, arguments);

                AGRC.app = this;
            },
            postCreate: function() {
                // summary:
                //      Fires when 
                console.log(this.declaredClass + "::" + arguments.callee.nom, arguments);

                this.selectQuery = new Query();

                this.initMap();

                this.addFeatureLayer();

                this.findAddress = new FindAddress({
                    map: this.map,
                    apiKey: AGRC.apiKey
                }, this.findAddressDiv);

                this.changeRequest = new ChangeRequest({
                    map: this.map
                }, this.suggestChangeDiv);

                this.wireEvents();

                this.sideContent = new SlideInSidebar({
                    map: this.map
                }, this.sideBar);
            },
            wireEvents: function() {
                this.own(
                    on(window, 'resize', lang.hitch(this, this.resize)),

                    on(this.map, "LayersAddResult", lang.hitch(this, 'initEditing')),
                    
                    aspect.after(this.changeRequest, 'onDrawStart', function() {
                        console.log('on draw start');
                        var ddl = $('#suggest-change-dropdown');
                        ddl.dropdown('toggle');
                        ddl.blur();
                        $('.dropdown').blur();
                    }),
                    
                    aspect.after(this.changeRequest, 'onDrawEnd', function() {
                        console.log('on draw end');
                        setTimeout(function() {
                            $('#suggest-change-dropdown').dropdown('toggle');
                        }, 100);
                    }),
                    
                    on(this.editLayer, "click", lang.hitch(this, function(evt) {
                        this.sideContent.show();
                        this.selectQuery.geometry = this._screenPointToEnvelope(evt);
                        this.editLayer.selectFeatures(this.selectQuery, esri.layers.FeatureLayer.SELECTION_NEW, function(features) {
                            console.log(features);
                            if (features.length > 0) {
                                console.log(features.length);
                                //store the current feature
                            } else {

                            }
                        });
                    }))
                );
            },
            _screenPointToEnvelope: function(evt) {
                var centerPoint = new Point(evt.mapPoint.x, evt.mapPoint.y, evt.mapPoint.spatialReference);
                var mapWidth = this.map.extent.getWidth();

                //Divide width in map units by width in pixels
                var pixelWidth = mapWidth / this.map.width;

                //Calculate a 10 pixel envelope width (5 pixel tolerance on each side)
                var tolerance = 10 * pixelWidth;

                //Build tolerance envelope and set it as the query geometry
                var queryExtent = new Extent(1, 1, tolerance, tolerance, evt.mapPoint.spatialReference);

                return queryExtent.centerAt(centerPoint);
            },
            initMap: function() {
                // summary:
                //      Sets up the map
                console.info(this.declaredClass + "::" + arguments.callee.nom, arguments);

                this.map = new BaseMap(this.mapDiv, {
                    defaultBaseMap: 'Lite',
                    extent: new Extent({
                        "type": "extent",
                        "xmin": 442054,
                        "ymin": 4100235,
                        "xmax": 446951,
                        "ymax": 4103608,
                        "spatialReference": {
                            "wkid": 26912
                        }
                    })
                });

                config.defaults.geometryService = new geomService("http://mapserv.utah.gov/ArcGIS/rest/services/Geometry/GeometryServer");
            },
            addFeatureLayer: function() {
                console.info(this.declaredClass + "::" + arguments.callee.nom, arguments);

                var id = 0;

                if (id < 0) {
                    return;
                }

                if (this.editLayer) this.map.removeLayer(this.editLayer);

                this.editLayer = new featureLayer("/arcgis/rest/services/demo/Editing/FeatureServer/" + id, {
                    mode: featureLayer.MODE_ONDEMAND,
                    useMapTime: false,
                    outFields: ['HouseAddr', 'FullAddr', 'HouseNum', 'PreDir', 'StreetName', 'StreetType', 'SufDir', 'UnitNumber', 'City', 'ZipCode']
                });

                var symbol = new SimpleMarkerSymbol(
                    SimpleMarkerSymbol.STYLE_CIRCLE, 8,
                    new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
                        new Color("black"), 1),
                    new Color("aqua")
                );

                this.editLayer.setSelectionSymbol(symbol);

                this.map.addLayers([this.editLayer]);
            },
            initEditing: function(layer) {
                // sumamry:
                //      initializes the editing settings/widget
                console.info(this.declaredClass + "::" + arguments.callee.nom, arguments);

                var featureLayerInfos = array.map(layer, function(result) {
                    return {
                        "featureLayer": result.layer
                    };
                });

                console.log('feature infos created' + "::" + layer);

                var layerInfos = [{
                    'featureLayer': featureLayerInfos[0].featureLayer,
                    'showAttachments': false,
                    'isEditable': true,
                    'fieldInfos': [{
                        'fieldName': 'HouseAddr',
                        'isEditable': true,
                        'tooltip': 'The House Address',
                        'label': 'House Address:'
                    }, {
                        'fieldName': 'FullAddr',
                        'isEditable': true,
                        'tooltip': 'The full address',
                        'label': 'FullAddr:'
                    }]
                }];

                this.attributeEditor = new AttributeEditor({
                    layerInfos: layerInfos
                }, domConstruct.create("div", null, this.sideContent.contentDiv, "first"));

                this.saveButton = new Button({
                        label: "Save",
                        "class": "atiSaveButton"
                    }); 

                domConstruct.place(this.saveButton.domNode, this.attributeEditor.editButtons, "first");

                this.own(on(this.saveButton, "Click", function() {
                        this.updateFeature.getLayer().applyEdits(null, [this.updateFeature], null);
                    }),

                    on(this.attributeEditor, "AttributeChange", function(feature, fieldName, newFieldValue) {
                        //store the updates to apply when the save button is clicked 
                        this.updateFeature.attributes[fieldName] = newFieldValue;
                    }),

                    on(this.attributeEditor, "Next", function(feature) {
                        this.updateFeature = feature;
                    }),

                    on(this.attributeEditor, "Delete", function(feature) {
                        feature.getLayer().applyEdits(null, null, [feature]);
                        this.sideContent.hide();
                    }));
                // var settings = {
                //     map: this.map,
                //     layerInfos: featureLayerInfos
                // };

                // var params = {
                //     settings: settings
                // };

                // if (this.editingpane) this.paneStack.remove(this.editingpane);

                // this.editingpane = new titlePane({
                //     title: "Edit Address Points",
                //     open: true
                // });

                // this.countypane.toggle();
                // this.paneStack.add(this.editingpane);

                // var editorWidget = new editor(params, this.editingpane.containerNode);

                // editorWidget.startup();

                console.log('done');
            },
            resize: function() {
                // summary:
                //      resizes the map and popup divs
                console.log(this.declaredClass + "::resize", arguments);

                if (!this.map) {
                    return;
                }

                this.map.resize();
            }
        });
    });