//>>built
define({root:{io:{proxyNotSet:"esri.config.defaults.io.proxyUrl is not set."},map:{deprecateReorderLayerString:"Map.reorderLayer(/*String*/ id, /*Number*/ index) deprecated. Use Map.reorderLayer(/*Layer*/ layer, /*Number*/ index).",deprecateShiftDblClickZoom:"Map.(enable/disable)ShiftDoubleClickZoom deprecated. Shift-Double-Click zoom behavior will not be supported."},geometry:{deprecateToScreenPoint:"esri.geometry.toScreenPoint deprecated. Use esri.geometry.toScreenGeometry.",deprecateToMapPoint:"esri.geometry.toMapPoint deprecated. Use esri.geometry.toMapGeometry."},
layers:{tiled:{tileError:"Unable to load tile"},dynamic:{imageError:"Unable to load image"},graphics:{drawingError:"Unable to draw graphic "},agstiled:{deprecateRoundrobin:"Constructor option 'roundrobin' deprecated. Use option 'tileServers'."},imageParameters:{deprecateBBox:"Property 'bbox' deprecated. Use property 'extent'."},FeatureLayer:{noOIDField:"objectIdField is not set [url: ${url}]",fieldNotFound:"unable to find '${field}' field in the layer 'fields' information [url: ${url}]",noGeometryField:"unable to find a field of type 'esriFieldTypeGeometry' in the layer 'fields' information. If you are using a map service layer, features will not have geometry [url: ${url}]",
invalidParams:"query contains one or more unsupported parameters",updateError:"an error occurred while updating the layer",createUserSeconds:"Created by ${userId} seconds ago",createUserMinute:"Created by ${userId} a minute ago",editUserSeconds:"Edited by ${userId} seconds ago",editUserMinute:"Edited by ${userId} a minute ago",createSeconds:"Created seconds ago",createMinute:"Created a minute ago",editSeconds:"Edited seconds ago",editMinute:"Edited a minute ago",createUserMinutes:"Created by ${userId} ${minutes} minutes ago",
createUserHour:"Created by ${userId} an hour ago",createUserHours:"Created by ${userId} ${hours} hours ago",createUserWeekDay:"Created by ${userId} on ${weekDay} at ${formattedTime}",createUserFull:"Created by ${userId} on ${formattedDate} at ${formattedTime}",editUserMinutes:"Edited by ${userId} ${minutes} minutes ago",editUserHour:"Edited by ${userId} an hour ago",editUserHours:"Edited by ${userId} ${hours} hours ago",editUserWeekDay:"Edited by ${userId} on ${weekDay} at ${formattedTime}",editUserFull:"Edited by ${userId} on ${formattedDate} at ${formattedTime}",
createUser:"Created by ${userId}",editUser:"Edited by ${userId}",createMinutes:"Created ${minutes} minutes ago",createHour:"Created an hour ago",createHours:"Created ${hours} hours ago",createWeekDay:"Created on ${weekDay} at ${formattedTime}",createFull:"Created on ${formattedDate} at ${formattedTime}",editMinutes:"Edited ${minutes} minutes ago",editHour:"Edited an hour ago",editHours:"Edited ${hours} hours ago",editWeekDay:"Edited on ${weekDay} at ${formattedTime}",editFull:"Edited on ${formattedDate} at ${formattedTime}"}},
tasks:{gp:{gpDataTypeNotHandled:"GP Data type not handled."},na:{route:{routeNameNotSpecified:"'RouteName' not specified for at least 1 stop in stops FeatureSet."}},query:{invalid:"Unable to perform query. Please check your parameters."}},toolbars:{draw:{convertAntiClockwisePolygon:"Polygons drawn in anti-clockwise direction will be reversed to be clockwise.",addPoint:"Click to add a point",addShape:"Click to add a shape, or press down to start and let go to finish",addMultipoint:"Click to start adding points",
freehand:"Press down to start and let go to finish",start:"Click to start drawing",resume:"Click to continue drawing",complete:"Double-click to complete",finish:"Double-click to finish",invalidType:"Unsupported geometry type"},edit:{invalidType:"Unable to activate the tool. Check if the tool is valid for the given geometry type.",deleteLabel:"Delete"}},virtualearth:{vetiledlayer:{bingMapsKeyNotSpecified:"BingMapsKey must be provided."},vegeocode:{bingMapsKeyNotSpecified:"BingMapsKey must be provided.",
requestQueued:"Server token not retrieved. Queing request to be executed after server token retrieved."}},widgets:{attributeInspector:{NLS_first:"First",NLS_previous:"Previous",NLS_next:"Next",NLS_last:"Last",NLS_deleteFeature:"Delete",NLS_title:"Edit Attributes",NLS_errorInvalid:"Invalid",NLS_validationInt:"Value must be an integer.",NLS_validationFlt:"Value must be a float.",NLS_of:"of",NLS_noFeaturesSelected:"No features selected"},overviewMap:{NLS_drag:"Drag To Change The Map Extent",NLS_show:"Show Map Overview",
NLS_hide:"Hide Map Overview",NLS_maximize:"Maximize",NLS_restore:"Restore",NLS_noMap:"'map' not found in input parameters",NLS_noLayer:"main map does not have a base layer",NLS_invalidSR:"spatial reference of the given layer is not compatible with the main map",NLS_invalidType:"unsupported layer type. Valid types are 'TiledMapServiceLayer' and 'DynamicMapServiceLayer'"},timeSlider:{NLS_first:"First",NLS_previous:"Previous",NLS_next:"Next",NLS_play:"Play/Pause",NLS_invalidTimeExtent:"TimeExtent not specified, or in incorrect format."},
attachmentEditor:{NLS_attachments:"Attachments:",NLS_add:"Add",NLS_none:"None",NLS_error:"There was an error.",NLS_fileNotSupported:"This file type is not supported."},directions:{error:{notEnoughStops:"Enter an origin and a destination.",unknownStop:"Location '<name>' could not be found.",routeTask:"Unable to route to these addresses.",locator:"Location could not be found.",invalidStopType:"Invalid stop type",locatorUndefined:"Unable to reverse geocode. Locator URL is undefined.",noAddresses:"No addresses were returned.",
noStops:"No stops were given to be added.",maximumStops:"The maximum number of stops has been reached"},time:{minute:"minute",minutes:"minutes",hour:"hour",hours:"hours"},units:{KILOMETERS:{name:"kilometers",abbr:"km."},METERS:{name:"meters",abbr:"m."},MILES:{name:"miles",abbr:"mi."},NAUTICAL_MILES:{name:"nautical miles",abbr:"nm."}},showOptions:"Show options",hideOptions:"Hide options",findOptimalOrder:"Optimize order",useTraffic:"Use traffic",returnToStart:"Return to start",addDestination:"Add destination",
viewFullRoute:"Zoom to full route",getDirections:"Get Directions",clearDirections:"Clear",reverseDirections:"Reverse directions",print:"Print",printNotes:"Enter notes here",printDisclaimer:"Directions are provided for planning purposes only and are subject to <a href='http://www.esri.com/legal/software-license' target='_blank'>Esri's terms of use</a>. Dynamic road conditions can exist that cause accuracy to differ from your directions and must be taken into account along with signs and legal restrictions. You assume all risk of use."},
editor:{tools:{NLS_attributesLbl:"Attributes",NLS_cutLbl:"Cut",NLS_deleteLbl:"Delete",NLS_extentLbl:"Extent",NLS_freehandPolygonLbl:"Freehand Polygon",NLS_freehandPolylineLbl:"Freehand Polyline",NLS_pointLbl:"Point",NLS_polygonLbl:"Polygon",NLS_polylineLbl:"Polyline",NLS_reshapeLbl:"Reshape",NLS_selectionNewLbl:"New selection",NLS_selectionAddLbl:"Add to selection",NLS_selectionClearLbl:"Clear selection",NLS_selectionRemoveLbl:"Subtract from selection",NLS_selectionUnionLbl:"Union",NLS_autoCompleteLbl:"Auto Complete",
NLS_unionLbl:"Union",NLS_rectangleLbl:"Rectangle",NLS_circleLbl:"Circle",NLS_ellipseLbl:"Ellipse",NLS_triangleLbl:"Triangle",NLS_arrowLbl:"Arrow",NLS_arrowLeftLbl:"Left Arrow",NLS_arrowUpLbl:"Up Arrow",NLS_arrowDownLbl:"Down Arrow",NLS_arrowRightLbl:"Right Arrow",NLS_undoLbl:"Undo",NLS_redoLbl:"Redo"}},Geocoder:{main:{clearButtonTitle:"Clear Search",searchButtonTitle:"Search",geocoderMenuButtonTitle:"Change Geocoder",geocoderMenuHeader:"Select geocoder",geocoderMenuCloseTitle:"Close Menu",untitledGeocoder:"Untitled geocoder"},
esriGeocoderName:"Esri World Geocoder"},HistogramTimeSlider:{NLS_range:"Range",NLS_cumulative:"Cumulative",NLS_play:"Play/Pause",NLS_invalidTimeExtent:"TimeExtent not specified, or in incorrect format.",NLS_overview:"OVERVIEW",NLS_fullRange:"full range"},legend:{NLS_points:"Points",NLS_lines:"Lines",NLS_polygons:"Polygons",NLS_creatingLegend:"Creating legend",NLS_noLegend:"No legend"},popup:{NLS_moreInfo:"More info",NLS_searching:"Searching",NLS_prevFeature:"Previous feature",NLS_nextFeature:"Next feature",
NLS_close:"Close",NLS_prevMedia:"Previous media",NLS_nextMedia:"Next media",NLS_noInfo:"No information available",NLS_noAttach:"No attachments found",NLS_maximize:"Maximize",NLS_restore:"Restore",NLS_zoomTo:"Zoom to",NLS_pagingInfo:"(${index} of ${total})",NLS_attach:"Attachments"},measurement:{NLS_distance:"Distance",NLS_area:"Area",NLS_location:"Location",NLS_resultLabel:"Measurement Result",NLS_length_miles:"Miles",NLS_length_kilometers:"Kilometers",NLS_length_feet:"Feet",NLS_length_meters:"Meters",
NLS_length_yards:"Yards",NLS_area_acres:"Acres",NLS_area_sq_miles:"Sq Miles",NLS_area_sq_kilometers:"Sq Kilometers",NLS_area_hectares:"Hectares",NLS_area_sq_yards:"Sq Yards",NLS_area_sq_feet:"Sq Feet",NLS_area_sq_meters:"Sq Meters",NLS_deg_min_sec:"DMS",NLS_decimal_degrees:"Degrees",NLS_map_coordinate:"Map Coordinate",NLS_longitude:"Longitude",NLS_latitude:"Latitude"},bookmarks:{NLS_add_bookmark:"Add Bookmark",NLS_new_bookmark:"Untitled",NLS_bookmark_edit:"Edit",NLS_bookmark_remove:"Remove"},print:{NLS_print:"Print",
NLS_printing:"Printing",NLS_printout:"Printout"},templatePicker:{creationDisabled:"Feature creation is disabled for all layers.",loading:"Loading.."},renderingRule:{rendererLabelTitle:"Renderer",bandCombinationLabelTitle:"RGB composite",userDefinedRendererTitle:"User Defined Renderer",userDefinedRendererDesc:"A user defined renderer. Use different bands for inputs to the Red, Green, and Blue channels (multi-band services only). Apply different radiometric enhancement algorithms to make image look better.",
imageEnhancementLabelTitle:"Image Enhancement",stretchDescLabel:"Apply contrast enhancements to improve the image display.",stretchMethodLabel:"Stretch Type:",stretchMethodNoneDesc:"No additional enhancements applied.",stretchMethodMinMaxDesc:"Stretch to the entire range of pixel values.",numStdDevLabelTitle:"Trim extreme pixel values beyond",numStdDevEndLabelTitle:"standard deviations.",draLabelTitle:"Dynamic range adjustment",minMaxDescLabelTitle:"Trim extreme pixel values",minPercentLabelTitle:"Exclude bottom:",
maxPercentLabelTitle:"Exclude top:",percentLabelTitle:"%",gammaLabelTitle:"Gamma:",bandNamesRequestMsg:"Requesting band information...",noneStretchAlias:"None",minMaxStretchAlias:"Minimum and Maximum",stdDevStretchAlias:"Standard Deviation",percentClipStretchAlias:"Percent Clip",minGammaLabel:"0.1",maxGammaLabel:"10"},mosaicRule:{mosaicMethodLabel:"Prioritize imagery based on:",orderFieldLabel:"Attribute:",orderValueLabel:"Highest priority value:",lockRasterIdLabel:"Image IDs:",mosaicOperatorLabel:"Resolve overlapping pixels by:",
descendingLabel:"Reverse the order",queryLabel:"Filter your images:",queryFieldLabel:"Field:",queryOperatorLabel:"Operator:",queryValueLabel:"Value:",selectAllLabel:"Select All",mosaicruleNotApplicable:"The image layer contains only one image and does not support changing image display order.",lockRasterRequestMsg:"Searching...",lockRasterRequestDoneMsg:"Done...",lockRasterRequestErrorMsg:"Error searching...",lockRasterRequestNoRasterMsg:"No rasters found...",refreshLockRasterIdsLabel:"Refresh",orderFieldNotFound:"Not Available",
byAttributeAlias:"An attribute",centerAlias:"Image center closest to view center",lockRasterAlias:"A list of images",nadirAlias:"Sensor location closest to view center",northWestAlias:"Fixed order with most North West on top",seamlineAlias:"Defined Seamlines",viewPointAlias:"View point",noneAlias:"Only scale",firstAlias:"Only highest priority",lastAlias:"Only Lowest priority",minAlias:"Minimum of pixel values",maxAlias:"Maximum of pixel values",averageAlias:"Average of pixel values",blendAlias:"Blend pixel values"}},
arcgis:{utils:{baseLayerError:"Unable to load the base map layer",geometryServiceError:"Provide a geometry service to open Web Map.",showing:"Showing ${fieldAlias}"}},identity:{lblItem:"item",title:"Sign in",info:"Please sign in to access the item on ${server} ${resource}",lblUser:"User Name:",lblPwd:"Password:",lblOk:"OK",lblSigning:"Signing in...",lblCancel:"Cancel",errorMsg:"Invalid username/password. Please try again.",invalidUser:"The username or password you entered is incorrect.",forbidden:"The username and password are valid, but you don't have access to this resource.",
noAuthService:"Unable to access the authentication service."},common:{cancel:"Cancel",ok:"OK",create:"Create",close:"Close",done:"Done",apply:"Apply",remove:"Remove",open:"Open",edit:"Edit",share:"Share",save:"Save",help:"Help",warning:"Warning",deleteLabel:"Delete",titleLabel:"Title:",newLabel:"New",arcgis:"ArcGIS",previous:"Previous",submit:"Submit",next:"Next",yesLabel:"Yes",noLabel:"No",errorTitle:"Error",upload:"Upload",sum:"Sum",minimum:"Minimum",maximum:"Maximum",average:"Average",standardDev:"Std Deviation",
statistic:"Statistic",attribute:"Field",selectAttribute:"Select attribute",runAnalysis:"Run Analysis",oneLabel:"1.",twoLabel:"2.",threeLabel:"3.",fourLabel:"4.",fiveLabel:"5.",outputnameMissingMsg:"Output name is required",miles:"Miles",kilometers:"Kilometers",meters:"Meters",feet:"Feet",degree:"Decimal Degree(s)",inches:"Inch(es)",nautMiles:"Nautical Miles",pointsUnit:"Point(s)",yards:"Yards",comingSoonLabel:"Coming Soon!",sqMiles:"Square Miles",sqKm:"Square Kilometers",sqMeters:"Square Meters",
hectares:"Hectares",acres:"Acres",seconds:"Seconds",minutes:"Minutes",hours:"Hours",today:"Today",monday:"Monday",tuesday:"Tuesday",wednesday:"Wednesday",thursday:"Thursday",friday:"Friday",saturday:"Saturday",sunday:"Sunday",chooseSummarizeLabel:"Choose layer to summarize",creditTitle:"Credit Usage Report",analysisLayers:"Analysis layers:",showCredits:"Show credits",learnMore:"Learn More",hoursSmall:"hrs",minutesSmall:"min",secondsSmall:"sec"},analysisTools:{performAnalysis:"Perform Analysis",summarizeData:"Summarize Data",
findLocations:"Find Locations",aggregateTool:"Aggregate Points",bufferTool:"Buffer Data",dataEnrichment:"Data Enrichment",analyzePatterns:"Analyze Patterns",useProximity:"Use Proximity",manageData:"Manage Data",aggregateToolName:"Aggregate Points",bufferToolName:"Create Buffers",aggregatePoints:"Aggregate Points",summarizeWithin:"Summarize Within",summarizeNearby:"Summarize Nearby",enrichLayer:"Enrich Layer",findNearest:"Find Nearest",findHotSpots:"Find Hot Spots",createBuffers:"Create Buffers",dissolveBoundaries:"Dissolve Boundaries",
mergeLayers:"Merge Layers",extractData:"Extract Data",overlayLayers:"Overlay Layers",fieldCalculator:"Field Calculator",createDriveTimeAreas:"Create Drive-Time Areas",deriveNewLocations:"Derive New Locations",findExistingLocations:"Find Existing Locations",exploreCorrelations:"Explore Correlations",findRoute:"Find Route",generateFleetPlan:"Generate Fleet-routing plan",createDensitySurface:"Create density surface",createInterpolatedSurface:"Create Surface",orgUsrMsg:"You must be a member of an organization to run this service.",
pubRoleMsg:"Your online account has not been assigned to the Publisher role.",servNameExists:"A published service with this name already exists within the organization. Service names must be unique across the organization. Please use a different name.",outputLayerLabel:"Result layer name",outputFileName:"Output file name",emptyResultInfoMsg:"The result of your analysis did not return any features. No layer will be created.",invalidServiceName:'The result layer name contains one or more invalid characters (<, >, #, %, :, ", ?, &, +, /, or \\).',
invalidServiceNameLength:"The result layer name length should be less than 98 characters.",requiredValue:"This value is required.",saveResultIn:"Save result in",useMapExtent:"Use current map extent"},aggregatePointsTool:{aggregateDefine:"Count <b>${layername}</b> within",outputLayerName:"Aggregation of ${pointlayername} to ${polygonlayername}",groupByLabel:"Choose field to group by (optional)",itemDescription:"Feature Service generated from running the Aggregate Points solutions. Points from ${pointlayername} were aggregated to ${polygonlayername}",
itemTags:"Analysis Result, Aggregate Points, ${pointlayername}, ${polygonlayername}",itemSnippet:"Analysis Feature Service generated from Aggregate Points",removeAttrStats:"Remove Attribute Statistics",keepPolygonLabel:"Keep areas with no points",addStatsLabel:"Add statistic (optional)",chooseAreaLabel:"Choose area"},findHotSpotsTool:{hotspotsPolyDefine:"Analyze <b>${layername}</b>  to find statistically significant hot and cold spots of ",hotspotsPointDefine:"Analyze <b>${layername}</b>  to find statistically significant hot and cold spots ",
fieldLabel:"with or without an analysis field",noAnalysisField:"No Analysis Field",hotspots:"Hot Spots",outputLayerName:"Hot Spots ${layername}",Options:"Options",defineBoundingLabel:"Define where incidents are possible",provideAggLabel:"Provide aggregation areas for summing incidents",defaultBoundingOption:"Select bounding areas",defaultAggregationOption:"Select aggregation areas",itemDescription:"Feature Service generated from running the Find Hot Spots solution.",itemTags:"Analysis Result, Hot Spots, ${layername}, ${fieldname}",
itemSnippet:"Analysis Feature Service generated from Find Hot Spots",chooseAttributeLabel:"Choose an analysis field",blayerName:"Drawn Boundaries"},overlayLayersTool:{overlayDefine:"Overlay <b>${layername}</b> with",chooseOverlayLayer:"Choose overlay layer",chooseOverlayMethod:"Choose overlay method",itemDescription:"Feature Service generated from running the Overlay layers solution.",itemTags:"Analysis Result, Overlay layers, ${layername}",itemSnippet:"Analysis Feature Service generated from Overlay layers",
unionOutputLyrName:"Union of ${layername} and ${overlayname}",intersectOutputLyrName:"Intersect of ${layername} and ${overlayname}",eraseOutputLyrName:"Erase ${layername} with ${overlayname}",overlayLayerPolyMsg:"The Overlay layer should be a Polygon Layer for Union overlay",notSupportedEraseOverlayMsg:"This Overlay layer is not supported for Erase overlay. Defaults to Intersect overlay.",intersect:"Intersect",union:"Union",erase:"Erase"},bufferTool:{bufferDefine:"Create buffers from <b>${layername}</b>",
outputLayerName:"Buffer of ${layername}",sizeLabel:"Enter buffer size",sizeHelp:"To create multiple buffers, enter distances separated by spaces (2 3 5).",typeLabel:"Buffer type",resultLabel:"Result layer name",optionsLabel:"Options",itemDescription:"Feature Service generated from running the Buffer Features solution. Input from ${layername} were buffered by ${distance_field} ${units}",itemTags:"Analysis Result, Buffer, ${layername}",itemSnippet:"Analysis Feature Service generated from Buffer",overlap:"Overlap",
dissolve:"Dissolve",include:"Include",exclude:"Exclude",around:"Around",sideType:"Side type",endType:"End type",left:"Left",right:"Right",round:"Round",flat:"Flat",multipleDistance:"Multiple distance buffers should be",rings:"Rings",disks:"Disks",areaofInputPoly:"Area of input polygons in buffer polygons",distanceMsg:"Only numeric values are allowed",distance:"Distance",field:"Field"},driveTimes:{toolDefine:"Create areas around <b>${layername}</b>",outputLayerName:"Drive from ${layername} (${breakValues} ${breakUnits})",
measureLabel:"Measure:",measureHelp:"To output multiple areas for each point, type sizes separated by spaces (2 3.5 5).",areaLabel:"Areas from different points:",trafficLabel:"Use typical traffic conditions for",resultLabel:"Result layer name",itemDescription:"Feature Service generated from running the Create Drive Times solution.",itemTags:"Analysis Result, Drive Times, ${layername}",itemSnippet:"Analysis Feature Service generated from Create Drive Times",split:"Split",seeAvailability:"See availability.",
timeOfDeparture:"Time of departure:",drivingDistance:"Driving distance",drivingTime:"Driving time"},extractDataTool:{layersToExtract:"Layers to extract",studyArea:"Study area",outputDataFormat:"Output data format",filegdb:"File Geodatabase (.zip)",shpFile:"Shape File (.zip)",lyrpkg:"Layer Package (.lpk)",selectFtrs:"Select features",clipFtrs:"Clip features",sameAsDisplay:"Same as Display",sameAsLayer:"Same as ${layername}",outputfileName:"Extract Data ${datetime}",itemDescription:"File generated from running the Extract Data solution.",
itemTags:"Analysis Result, Extract Data",itemSnippet:"Analysis File item generated from Extract Data",kml:"KML (.kmz or .zip)",csvPoints:"CSV (.csv or .zip)  ",linesCSVValidationMsg:"Line and area layers cannot be extracted to CSV.  Choose a different format or uncheck all line and area layers.",runAnalysisMsg:"Data is being extracted and will be available in MY CONTENT."},summarizeWithinTool:{summarizeDefine:"For Features within <b>${sumWithinLayerName}</b>",outputLayerName:"Summarize ${summaryLayerName} within ${sumWithinLayerName}",
groupByLabel:"Choose field to group by (optional)",itemDescription:"Feature Service generated from running the Summarize Within solution. ${summaryLayerName} were summarized within ${sumWithinLayerName}",itemTags:"Analysis Result, Summarize Within, ${sumWithinLayerName}, ${summaryLayerName}",itemSnippet:"Analysis Feature Service generated from Summarize Within",removeAttrStats:"Remove Attribute Statistics",summarizeMetricPoint:"Count of points",summarizeMetricLine:"Length of lines in",summarizeMetricPoly:"Sum Area in",
addStatsLabel:"Attribute statistics",addStats:"Add statistics from <b>${summaryLayerName}</b>",sumLabel:"Summarize"},summarizeNearbyTool:{summarizeDefine:"Find what is nearby <b>${sumNearbyLayerName}</b>",findNearLabel:"Find nearest features using a",outputLayerName:"Summarize ${summaryLayerName} in ${sumNearbyLayerName}",groupByLabel:"Choose field to group by (optional)",itemDescription:"Feature Service generated from running the Summarize Nearby solution. ${sumNearbyLayerName} were summarized nearby ${summaryLayerName}",
itemTags:"Analysis Result, Summarize Nearby, ${sumNearbyLayerName}, ${summaryLayerName}",itemSnippet:"Analysis Feature Service generated from Summarize Nearby",removeAttrStats:"Remove Attribute Statistics",summarizeMetricPoint:"Count of points",summarizeMetricLine:"Total Length",summarizeMetricPoly:"Total Area",addStatsLabel:"Attribute statistics",addStats:"Add statistics from <b>${summaryLayerName}</b>",sumLabel:"Summarize",chooseLayer:"Choose layer to summarize",straightLineDistance:"Line distance"},
creditEstimator:{analysisLayersLabel:"Analysis layers:",totalRecordsLabel:"Total records:",creditsAvailLabel:"Credits available:",creditsReqLabel:"Credits required:",ntwCreditsReqLabel:"Network credits required:",EnrichCreditsLabel:"Enrichment credits required"},enrichLayerTool:{selectCountryLabel:"Select country",enrichDefine:"Enrich <b>${inputLayerName}</b>",chooseDataCollectionLabel:"Show available data for:",defAreasLabel:"Define areas to enrich",outputLayerName:"Enriched ${layername}",itemDescription:"Feature Service generated from running the Enrich layer solution. ${inputLayerName} were enriched",
itemTags:"Analysis Result, Enrich Layer, ${inputLayerName}",itemSnippet:"Analysis Feature Service generated from Enrich layer",straightLineDistance:"Line distance",usCountryCode:"United States",canadaCountryCode:"Canada",austriaCountryCode:"Austria",belgiumCountryCode:"Belgium",brazilCountryCode:"Brazil",denmarkCountryCode:"Denmark",finlandCountryCode:"Finland",franceCountryCode:"France",germanyCountryCode:"Germany",greeceCountryCode:"Greece",indiaCountryCode:"India",irelandCountryCode:"Ireland",
italyCountryCode:"Italy",japanCountryCode:"Japan",liechtensteinCountryCode:"Liechtenstein",luxembourgCountryCode:"Luxembourg",netherlandsCountryCode:"Netherlands",norwayCountryCode:"Norway",portugalCountryCode:"Portugal",spainCountryCode:"Spain",switzerlandCountryCode:"Switzerland",swedenCountryCode:"Sweden",turkeyCountryCode:"Turkey",ukCountryCode:"United Kingdom",globalCode:"Global",keyGlobalFacts:"Key Global Facts",age:"Age",husByOccupancy:"Housing Units By Occupancy",householdsByIncome:"Households by Income",
keyUSFacts:"Key US Facts",policy:"Policy Facts",raceAndEthnicity:"Race And Ethnicity",wealth:"Wealth Facts",keyCanFacts:"Key Canada Facts",aTSpend:"Austria Spending",aTFacts:"Austria Facts",bESpend:"Belgium Spending",bEFacts:"Belgium Facts",bRSpend:"Brazil Spending",bRFacts:"Brazil Facts",dKSpend:"Denmark Spending",dKFacts:"Denmark Facts",fISpend:"Finland Spending",fIFacts:"Finland Facts",fRSpend:"France Spending",fRFacts:"France Facts",dESpend:"Germany Spending",dEFacts:"Germany Facts",gRSpend:"Greece Spending",
gRFacts:"Greece Facts",iEFacts:"Ireland Facts",iESpend:"Ireland Spending",iNFacts:"India Facts",iNSpend:"India Spending",iTFacts:"Italy Facts",iTSpend:"Italy Spending",keyWEFacts:"Key Western Europe Facts",keyWESpend:"Key Western Europe Spending",jPFacts:"Japan Facts",jPSpend:"Japan Spending",lIFacts:"Liechtenstein Facts",lISpend:"Liechtenstein Spending",lUFacts:"Luxembourg Facts",lUSpend:"Luxembourg Spending",nLFacts:"Netherlands Facts",nLSpend:"Netherlands Spending",nOFacts:"Norway Facts",nOSpend:"Norway Spending",
pTFacts:"Portugal Facts",pTSpend:"Portugal Spending",eSSpend:"Spain Spending",eSFacts:"Spain Facts",sEFacts:"Sweden Facts",sESpend:"Sweden Spending",cHFacts:"Switzerland Facts",cHSpend:"Switzerland Spending",tRFacts:"Turkey Facts",tRSpend:"Turkey Spending",gBFacts:"United Kingdom Facts",gBSpend:"United Kigdom Spending",tapestry:"Tapestry",infrastructure:"Infrastructure",landCover:"Land Cover",landscapeFacts:"Landscape Facts",publicLands:"Public Lands",soils:"Soils",waterWetlands:"Water Wetlands"},
dissolveBoundaries:{dissolveBoundariesDefine:"Dissolve <b>${layername}</b>",chooseDissolveLabel:"Choose dissolve method",overlappingAreasLabel:"Areas that overlap or are adjacent",sameAttributeAreasLabel:"Areas with same field value",summarizeLabel:"Add statistic (optional)",itemDescription:"Feature Service generated from running the Dissolve Boundaries solution.",itemTags:"Analysis Result, Dissolve Boundaries, ${layername}",itemSnippet:"Analysis Feature Service generated from Dissolve Boundaries",
resultLabel:"Result layer name",outputLayerName:"Dissolve ${layername}"},FindNearestTool:{summarizeDefine:"For each location in <b>${sumNearbyLayerName}</b>, find its nearest locations.",findNearLabel:"Find the nearest locations by measuring:",outputLayerName:"Nearest ${sumNearbyLayerName} to ${layer}",groupByLabel:"Choose field to group by (optional)",itemDescription:"Feature Service generated from running the Find Nearest solution. Nearest ${sumNearbyLayerName}",itemTags:"Analysis Result, Find Nearest, ${sumNearbyLayerName}, ${summaryLayerName}",
itemSnippet:"Analysis Feature Service generated from Find Nearest",removeAttrStats:"Remove Attribute Statistics",forEachLocationLabel:"For each location in <b>${sumNearbyLayerName}</b>",findNearestLabel:"Limit the number of nearest locations to:",limitSearchRangeCheck:"Limit the search range to:",addStats:"For each location in <b>${summaryLayerName}</b>",chooseLayer:"Choose a layer",findLocationsIn:"Find the nearest locations in:",outputLayersLabel:"Result layer names",straightLineDistance:"Line distance",
resultLabel1:"Nearest locations layer:",resultLabel2:"Connecting lines layer:",outputConnectingLayerName:"Nearest ${layer} to ${sumNearbyLayerName} (Lines)",chooseLayerInfoLabel:"Both input layers must contain points to enable Driving distance and Driving time options"},mergeLayers:{mergeLayersDefine:"Merge <b>${layername}</b> with",outputLayerName:"Merge ${layername} ${mergelayername}",chooseMergeLayer:"Choose layer",mergeFieldsLabel:"Modify merging fields (optional)",itemDescription:"Feature Service generated from running the Merge Layers solution.",
itemTags:"Analysis Result, Merge Layers, ${layername}",itemSnippet:"Analysis Feature Service generated from Merge Layers",resultLabel:"Result layer name",rename:"Rename",remove:"Remove",match:"Match",operation:"Operation",fieldTypeMatchValidationMsg:"Fields to be matched must have the same type.  Transformation of types is supported (for example, double to integer, integer to string) except for string to numeric."},analysisMsgCodes:{SS_84493:"There was 1 outlier location; it was not used to compute ${AggregationType}.",
SS_84492:"The total study area was ${Area}.",SS_84491:"There were ${NumFeatures} valid input aggregation areas.",SS_84490:"The aggregation process resulted in ${AggNumFeatures} weighted areas.",SS_84489:"Analysis was performed on all aggregation areas.",SS_84485:"There were ${NumFeatures} valid input features.",SS_84477:"Blue output features represent cold spots where low ${FieldName} cluster.",SS_84476:"Red output features represent hot spots where high ${FieldName} cluster.",SS_84471:"Output",SS_84470:"${NumSignificant} output features are statistically significant based on a FDR correction for multiple testing and spatial dependence.",
SS_84466:"Hot Spot Analysis",SS_84465:"The optimal fixed distance band was based on one standard distance of the features from the geometric mean: ${DistanceInfo}.",SS_84464:"The optimal fixed distance band was based on the average distance to ${NumNeighs} nearest neighbors: ${DistanceInfo}.",SS_84461:"The optimal fixed distance band selected was based on peak clustering found at ${DistanceInfo}.",SS_84459:"Scale of Analysis",SS_84458:"Analysis was based on the number of points in each polygon cell.",
SS_84457:"Points were aggregated to the fishnet polygon cells falling within the bounding areas provided.",SS_84453:"Analysis was performed on all fishnet polygon cells within the bounding area layer.",SS_84452:"Analysis was performed on all fishnet polygon cells containing at least one point.",SS_84451:"Analysis was based on the number of points in each fishnet polygon cell.",SS_84450:"The polygon cell size was ${SnapInfo}.",SS_84449:"A fishnet polygon mesh was created for aggregating points.",SS_84446:"${VarName} Properties:",
SS_84444:"Incident Aggregation",SS_84437:"There were no locational outliers.",SS_84434:"There were ${NumOutliers} outlier locations; these were not used to compute ${AggregationType}.",SS_84428:"Initial Data Assessment.",SS_84271_0:"Min",SS_84272_0:"Max",SS_84261_0:"Mean",SS_84262_0:"Std. Dev.",SS_00002:"The following report outlines the workflow used to optimize your Find Hot Spots result:",AO_100001:"AggregatePoints failed.",AO_100002:"The geometry type of Point Layer must be points.",AO_100003:"The geometry type of  Polygon Layer must be polygons.",
AO_100004:"The field  ${fieldName} provided for Summary Fields does not exist.",AO_100005:"The field  ${fieldName} provided for Summary Fields is not numeric.",AO_100006:"The summary type ${summary} provided for field ${fieldName} is invalid.",AO_100007:"FindHotSpots failed.",AO_100008:"The geometry type of Bounding Polygon Layer input must be polygons.",AO_100009:"The geometry type of Analysis Layer must be points or polygons.",AO_100010:"The geometry type of Aggregation Polygon Layer must be polygons.",
AO_100011:"Must provide an Analysis Field for polygon Analysis Layer.",AO_100012:"CreateBuffers failed.",AO_100013:"OverlayLayers failed.",AO_100014:"SummarizeWithin failed.",AO_100015:"The geometry type of Summarize Layer input must be point, line or polygons.",AO_100016:"The geometry type of Summarize Layer input must be point or line.",AO_100017:"The geometry type of Summarize Layer input must be point.",AO_100018:"Sum Units ${sumUnits} is not applicable for ${shapeType} shape type.",AO_100019:"At least one of the parameters, Summarize Shape or  Summary Fields is required.",
AO_468:"Input shape types are not equal.",AO_1156:"A field value was incompatible with the field type.",AO_800:"The value is not a member of SUM | MEAN | MIN | MAX | RANGE | STD | COUNT | FIRST | LAST.",AO_728:"Field ${fieldName} does not exist within table.",AO_12:"Field to add already exists.",AO_539:"Expression is invalid.",AO_1115:"Layer description property must be set for ${layerName}.",AO_366:"Invalid geometry type.",AO_641:"This tool requires at least ${numFeatures} feature(s) to compute results.",
AO_906:"Zero variance: all of the values for your input field are likely the same.",AO_1534:"The number of incidents within each of the user-provided aggregation polygons is the same. Please choose a different polygon dataset or a different aggregation method.",AO_1535:"The number of user-provided aggregation polygons must meet the minimum of ${numFeatures}.",AO_1536:"Too few incident points for analysis. This aggregation method requires at least ${numFeatures} incidents to compute results.",AO_84426:"Must provide polygons for aggregating incidents into counts for this incident data aggregation method.",
AO_26:"Buffer distance is zero.",AO_109:"The buffer distance cannot be negative for lines and points.",AO_385:"The LINE option is not valid with point features.",AO_438:"Overlay not polygon.",AO_100020:"EnrichLayer failed.",AO_100021:"The geometry type of Input Layer must be point, line or polygon.",AO_100022:"Units ${units} is not supported for Buffer type ${bufferType}.",AO_100023:"Unable to enrich layer for input spatial reference ${spref}.",AO_100024:"The number of features in ${inputLayer} is zero.",
AO_100025:"SummarizeNearby failed.",AO_100026:"ExtractData failed.",AO_100027:"DissolveBoundaries failed.",AO_100028:"CreateDriveTimeAreas failed.",AO_100029:"MergeLayers failed.",AO_100030:"FindNearest failed.",AO_100031:"The number of nearest locations to find can not be greater than 100.",AO_100032:"The number of features in ${analysisLayer} is zero.",AO_100033:"The number of features in ${nearLayer} is zero.",AO_100034:"The number of features in ${analysisLayer} can not be greater than 1000.",
AO_100035:"The number of features in ${nearLayer} can not be greater than 1000.",GPEXT_001:"Invalid parameter ${name} value",GPEXT_002:"Parameter missing ${name}",GPEXT_003:"Invalid parameter ${name}:property ${propname} is missing",GPEXT_004:"Invalid layer parameter property ${propname} is missing",GPEXT_005:"Failed to access url ${url}",GPEXT_006:"Accessing url ${url} returned error ${error}",GPEXT_007:"Invalid item ${id}",GPEXT_008:"Failed to create service ${name}",GPEXT_009:"Failed to add layer ${name} to service ${name}",
GPEXT_010:"Failed to parse layer JSON",GPEXT_012:"Invalid External Operation",GPEXT_013:"This tool uses the Geoenrichment Service.  Please refer to ArcGIS Online Service Credit Estimator for more details.",GPEXT_014:"This tool uses Network Analysis Services.  Please refer to ArcGIS Online Service Credit Estimator for more details."},geoenrichment:{dijit:{AgePyramid:{maxLabel:"The largest group:",minLabel:"The smallest group:",compLabel:"Dots show comparison to",menLabel:"Men",womenLabel:"Women"},
BufferOptions:{studyArea:"Show data for:",ring:"Ring",driveTime:"Drive Times",driveDistance:"Drive Distance",radius:"Radius:",units:{esriDriveTimeUnitsMinutes:"minutes",esriMiles:"miles",esriKilometers:"kilometers",esriFeet:"feet",esriMeters:"meters"}},bufferTitle:{pointRing:{esriFeet:"${radius}-feet ring",esriKilometers:"${radius}-km ring",esriMeters:"${radius}-meter ring",esriMiles:"${radius}-mile ring"},pointDriveTime:{esriFeet:"${radius}-feet drive distance",esriKilometers:"${radius}-km drive distance",
esriMeters:"${radius}-meter drive distance",esriMiles:"${radius}-mile drive distance",esriDriveTimeUnitsMinutes:"${radius}-minute drive time"},lineBuffer:{esriFeet:"${radius}-feet buffer",esriKilometers:"${radius}-km buffer",esriMeters:"${radius}-meter buffer",esriMiles:"${radius}-mile buffer"},polygon:"This area",stdGeo:"Intersecting ${level} feature"},DataCollectionsPage:{loading:"Loading...",chooseCountry:"Show available data for:",global:"Global",chooseDataCollection:"Select data collection:",
back:"Back",next:"Next",cancel:"Cancel"},EnrichOptionsPage:{bufferRing:"1 mile circle around locations",bufferPolygon:"input polygons (buffer unavailable)",selectedVariables:"Selected Variables:",customize:"customize",bufferOptions:"Show data for:",edit:"edit",totalVars:"Total Variables: ${varCount} (${credits})",varsPerRow:"Variables per Row: ${varCount} (${credits})",credits:"${credits} credits",creditsCalc:"calculating...",totalVarsTooltip:"This operation will enrich ${rowCount} rows with ${varCount} variables and will cost ${credits}.",
varsPerRowTooltip:"This operation will enrich each row with ${varCount} variables and will cost ${credits} per row.",overwriteExisting:"Existing column values will be overwritten",varName:"Variable Name",column:"Column",newColumn:"<Create New>",noColumn:"<None>",back:"Back",finish:"Add data to system"},InfographicsMainPage:{mainTitle:"Configure Infographics",loading:"Loading...",chooseCountry:"Show available data for: ",chooseDataCollection:"Choose from popular data collections: ",chooseTheme:"Select color theme:",
dark:"Dark",light:"Light",addVariables:"Add more individual variables",ok:"OK",add:"Add",cancel:"Cancel"},OneVar:{subtitleSite2:"for this area ",subtitleVar2:"${alias} is ",lessThan:"which is less than the ${site} average",moreThan:"which is more than the ${site} average",same:"which is the same as the ${site} average",areaCol:"Area",valueCol:"Value"},RelatedVariables:{highLabel2:"The largest group: ${alias}",lowLabel2:"The smallest group: ${alias}",indicatorCol:"Indicator",valueCol:"Value",difCol:"Difference",
chartLabel:"Bars show deviation from"},Tapestry:{hhTypeLabel:"Household Type:",medianAgeLabel:"Median Age:",incomeLabel:"Income:",employmentLabel:"Employment:",educationLabel:"Education:",residentialLabel:"Residential:",raceEthnicityLabel:"Race / Ethnicity:",hhLabel:"households",adultsLabel:"adults"},VariablesPage:{back:"Back",ok:"OK"}}}}});