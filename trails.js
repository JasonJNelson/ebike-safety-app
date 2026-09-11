(function () {
  const TRAILS = {
    "Alabama": "Hugh Branyon Backcountry Trail (Gulf State Park); Chief Ladiga Trail \u2014 typically Class 1/2 on paved segments.",
    "Alaska": "Tony Knowles Coastal Trail (Anchorage); Coastal Trail connectors \u2014 usually treated like bikes; confirm winter grooming rules.",
    "Arizona": "Indian Bend Wash Path (Scottsdale); Rio Salado Path (Tempe/Phoenix); Arizona Canal Path \u2014 Class 1 commonly allowed.",
    "Arkansas": "Razorback Regional Greenway; Delta Heritage Trail (paved/gravel sections) \u2014 Class 1/2 typical on municipal greenways.",
    "California": "American River Parkway (Sacramento); Monterey Bay Coastal Rec Trail; Ballona Creek Path \u2014 Class 1 widest access; Class 3 often barred from paths.",
    "Colorado": "Cherry Creek Trail; High Line Canal Trail; Colorado Front Range Trail segments \u2014 Class 1/2 on most multi-use paths; Class 3 usually roads only.",
    "Connecticut": "Farmington Canal Heritage Trail; Air Line State Park Trail (paved parts) \u2014 Class 1 common; check town postings.",
    "Delaware": "Junction & Breakwater Trail; Michael N. Castle Trail; Georgetown-Lewes Trail \u2014 Class 1/2 generally welcome.",
    "District of Columbia": "Anacostia Riverwalk; Capital Crescent Trail (DC section); Metropolitan Branch Trail \u2014 Class 1/2 typical; no statewide Class 3.",
    "Florida": "Pinellas Trail; West Orange Trail; Coast-to-Coast connector \u2014 Class 1/2 widely used; watch local speed caps.",
    "Georgia": "Silver Comet Trail; Atlanta BeltLine Eastside Trail; Augusta Canal Trail \u2014 Class 1 typical; Class 3 limited on many paths.",
    "Hawaii": "Ke Ala Hele Makalae (Kauai); Pearl Harbor Historic Trail; Kealakehe Parkway Path \u2014 Class 1 common; registration still required statewide.",
    "Idaho": "Boise River Greenbelt; Wood River Trail (Sun Valley); North Idaho Centennial Trail \u2014 Class 1/2 widely allowed.",
    "Illinois": "Illinois Prairie Path; Chicago Lakefront Trail; Fox River Trail \u2014 Class 1/2 common; Class 3 more restricted locally.",
    "Indiana": "Monon Trail; Indianapolis Cultural Trail; Cardinal Greenway \u2014 Class 1 typical; Class 3 often off shared paths.",
    "Iowa": "High Trestle Trail; Raccoon River Valley Trail; Cedar Valley Nature Trail \u2014 relatively open on many rail-trails.",
    "Kansas": "Prairie Spirit Trail; Landon Nature Trail; Wichita Redbud Trail \u2014 Class 1 typical on state rail-trails.",
    "Kentucky": "Louisville Loop; Paducah Greenway; Lexington Town Branch Trail \u2014 Class 1 common; confirm park-board rules.",
    "Louisiana": "Lafitte Greenway; Mississippi River Trail (New Orleans); Tammany Trace \u2014 Class 1/2 typical on parish greenways.",
    "Maine": "Eastern Trail; Mountain Division Trail; Kennebec River Rail Trail \u2014 Class 1 preferred; some segments post motorized bans.",
    "Maryland": "WB&A Trail; Great Allegheny Passage (Cumberland end); Anacostia Tributary Trails \u2014 Class 1/2 common; Class 3 often barred from paths.",
    "Massachusetts": "Cape Cod Rail Trail; Minuteman Bikeway; Charles River Bike Path \u2014 Class 1/2 typical.",
    "Michigan": "Fred Meijer White Pine Trail; Detroit RiverWalk; Kal-Haven Trail \u2014 Class 1/2 on most linear state trails.",
    "Minnesota": "Midtown Greenway; Paul Bunyan State Trail; Cannon Valley Trail \u2014 Class 1 widely allowed; some parks post Class 2/3 limits.",
    "Mississippi": "Longleaf Trace; Tanglefoot Trail; Ridgeland Multi-Use Path \u2014 Class 1/2 typical on rail-trails.",
    "Missouri": "Katy Trail State Park; Grant's Trail; St. Louis Riverfront Trail \u2014 Class 1 common; check State Parks bulletin.",
    "Montana": "River's Edge Trail (Great Falls); Bitterroot Trail; Billings Highway 3 Path \u2014 local rules dominate; Class 1 safest bet.",
    "Nebraska": "Keystone Trail (Omaha); MoPac East Trail; Lincoln Rock Island Trail \u2014 relatively permissive on metro paths.",
    "Nevada": "Las Vegas Wash Trail; Truckee River Walk (Reno); Boulder City Historic Railroad Trail \u2014 Class 1/2 typical.",
    "New Hampshire": "Northern Rail Trail; Cotton Valley Rail Trail; WOW Trail \u2014 Class 1 common; some rail-trails restrict throttle bikes.",
    "New Jersey": "Henry Hudson Trail; D&R Canal Towpath (posted sections) \u2014 Class 1 preferred; license/reg also apply.",
    "New Mexico": "Paseo del Bosque Trail (Albuquerque); Santa Fe Rail Trail; Las Cruces Trails \u2014 Class 1 typical on paved multi-use paths.",
    "New York": "Hudson River Greenway; Empire State Trail (state-managed segments); Brooklyn Waterfront Greenway \u2014 Class 1/2 on many off-road segments; Class 3 banned on most trails; NYC 15 mph cap.",
    "North Carolina": "American Tobacco Trail; Little Sugar Creek Greenway; Durham Belt Line \u2014 Class 1 typical.",
    "North Dakota": "Bismarck Riverfront Trail; Fargo Red River Trail; Minot Souris River Trails \u2014 Class 1 typical on city paths.",
    "Ohio": "Ohio to Erie Trail; Little Miami Scenic Trail; Towpath Trail \u2014 Class 1/2 common; Class 3 often roads only. NPS sections follow NPS rules.",
    "Oklahoma": "Oklahoma River Trails; Katy Trail (OKC); River Parks Trail (Tulsa) \u2014 Class 1/2 typical on municipal paths.",
    "Oregon": "Springwater Corridor; Banks-Vernonia State Trail; Willamette River Greenway paths \u2014 Class 1/2 common; Class 3 limited on many paths.",
    "Pennsylvania": "Great Allegheny Passage; Schuylkill River Trail; Ghost Town Trail \u2014 Class 1 widely accepted.",
    "Rhode Island": "William C. O'Neill Bike Path; Blackstone River Bikeway; East Bay Bike Path \u2014 Class 1/2 typical.",
    "South Carolina": "Swamp Rabbit Trail; Spanish Moss Trail; West Ashley Greenway \u2014 Class 1 typical; local greenway rules vary.",
    "South Dakota": "George S. Mickelson Trail; Sioux Falls Bike Trails; Rapid City Civic Center Path \u2014 Class 1 commonly allowed; check Mickelson pass/rules.",
    "Tennessee": "Shelby Farms Greenline; Music City Bikeway; Knoxville paved greenways \u2014 Class 1 typical; cities can restrict greenways.",
    "Texas": "Ann and Roy Butler Hike-and-Bike Trail (Austin); Katy Trail (Dallas); Buffalo Bayou Trail (Houston) \u2014 Class 1/2 common; Class 3 often road/bike-lane only.",
    "Utah": "Jordan River Parkway; Provo River Parkway; Park City rail-trail segments \u2014 Class 1/2 typical; some canyons post e-bike limits.",
    "Vermont": "Island Line Trail; Missisquoi Valley Rail Trail; Burlington Waterfront Path \u2014 Class 1 common.",
    "Virginia": "Virginia Capital Trail; W&OD Trail; New River Trail State Park (check current e-bike order) \u2014 Class 1 typical; Class 3 more limited.",
    "Washington": "Burke-Gilman Trail; Centennial Trail; Sammamish River Trail \u2014 Class 1/2 common; Class 3 barred from many separated paths.",
    "West Virginia": "Greenbrier River Trail; North Bend Rail Trail; Caperton Trail (Morgantown) \u2014 Class 1 typical; Class 3 often off shared paths.",
    "Wisconsin": "Elroy-Sparta State Trail; Hank Aaron State Trail; Oak Leaf Trail (Milwaukee) \u2014 Class 1/2 on many state trails.",
    "Wyoming": "Greater Cheyenne Greenway; Jackson Community Pathways; Casper Platte River Parkway \u2014 Class 1 typical on city pathways."
  };
  if (typeof stateData === "object") {
    Object.keys(TRAILS).forEach(function (name) {
      if (stateData[name]) stateData[name].trails = TRAILS[name];
    });
  }
  window.tooltipHTML = function (d) {
    return "<h3>" + d.name + "</h3>" + chips(d) +
      "<div class=\"tip-row\"><div><strong>Paths (Class 3)</strong>" + d.paths + "</div><div><strong>Helmet</strong>" + d.helmet + "</div><div><strong>Min age</strong>" + d.age + "</div><div><strong>License / Reg</strong>" + d.license + " / " + d.reg + "</div></div>" +
      "<div style=\"margin-top:.55rem;font-size:.78rem;line-height:1.35\"><strong style=\"display:block;font-size:.68rem;text-transform:uppercase;letter-spacing:.04em;color:#0f766e\">E-bike friendly public paths</strong>" + (d.trails || "Confirm locally.") + "</div>" +
      "<div class=\"tip-foot\">" + (isPro() ? d.notes : "Click to pin the full list. Class 1 is usually welcome; check trailhead signs.") + "</div>";
  };
  window.panelHTML = function (d) {
    var notes = isPro()
      ? "<div class=\"info-item\" style=\"margin-top:1rem;border-left-color:#f59e0b\"><strong>Notes & local considerations</strong><span>" + d.notes + "</span></div>"
      : "<div style=\"position:relative;margin-top:1rem\"><div class=\"info-item locked\"><strong>Notes</strong><span>" + d.notes + "</span></div><div style=\"position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:.5rem;background:rgba(255,255,255,.72)\"><strong style=\"color:var(--pro-dark)\">Detailed notes are Pro</strong><button class=\"btn-pro\" onclick=\"openUpgradeModal()\">Unlock Pro</button></div></div>";
    var trails = "<div class=\"info-item\" style=\"margin-top:1rem;border-left-color:#0d9488\"><strong>E-bike friendly public trails & paths</strong><span>" + (d.trails || "Confirm with the trail manager.") + "</span><em style=\"display:block;margin-top:.35rem;font-size:.8rem;color:#64748b\">Usually Class 1 (sometimes Class 2). Class 3 is often barred. NPS: allowed where bikes are allowed. U.S. Forest Service: motorized unless designated.</em></div>";
    return chips(d) + "<div class=\"detail-grid\"><div class=\"info-item\"><strong>Class 3 on bike paths</strong><span>" + d.paths + "</span></div><div class=\"info-item\"><strong>Helmet</strong><span>" + d.helmet + "</span></div><div class=\"info-item\"><strong>Minimum age (Class 3)</strong><span>" + d.age + "</span></div><div class=\"info-item\"><strong>License / registration</strong><span>License: " + d.license + " \u00b7 Reg: " + d.reg + "</span></div></div>" + trails + notes;
  };
})();
