public CoverageEnum GetCoverageFromPageUrl(string pageUrl) {

    // Angle Sharp Config

    // Load default configuration and open context
    var config = Configuration.Default.WithDefaultLoader();
    var context = BrowsingContext.New(config);

    // Parse the page by Url in a document
    var document = context.OpenAsync(pageUrl).Result;

    //Get elements from the page, and the coverage string
    var coverageElementParent = document.QuerySelector(_settings.ParentElementIdentifier);
    var coverageStringElement = coverageElementParent.QuerySelector(_settings.CoverageStringElementIdentifier);

    var coverageString = coverageStringElement.InnerHtml;

    //Define and assign the type of coverage
    CoverageEnum coverageEnum;

    if(coverageString == _settings.FTTHCoverageStringIdentifier){
        coverageEnum = CoverageEnum.FTTH;
    }
    else if(coverageString == _settings.FWACoverageStringIdentifier){
        coverageEnum = CoverageEnum.FWA;
    }
    else if(coverageString == _settings.NOCoverageStringIdentifier){
        coverageEnum = CoverageEnum.NoCoverage;
    }
    else{
        throw new Exception($"The string {coverageString} is not expected, and it's not possible to identify the coverage.");
    }       

    return coverageEnum;
}