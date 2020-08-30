var styleTag = document.createElement("style");
styleTag.textContent = '/* "myfavolours" - global custom colour scheme http://userstyles.org/styles/2187 BEGIN */ /* i really want this to be global */ /* summary: - basic background = dark grey - basic text = light grey - "semantic" importance = contrast - unvisited links (and form labels) = aquamarine - visited links = light green - form elements, :hover, :focus, and more latest revisions 2008-08-18: FF3 fix 2010-01-07: minor fixes 2011-11-01: view-source, "progressmeters".. 2012-08-29: few more "transparent flyout" fixes (for gmail mostly) ([role]) 2013-09-18: `window` out, lets see the flashes. */ @namespace url(http://www.w3.org/1999/xhtml); /*** init - setting basic colours / background - disabling (most of) background images */ /* Disabling text-indent will bring back text of most of "graphical" headings off by default, to comply with "nothing but colours" rule /on*off/ html * { text-indent      : 0 !important } /* */ html  , /* background-images - disable ALL /on*off/ html * , /* OR - allow SOME "buttons"on*/ html *:not(:empty):not(.Emoticon) , /* */ html *:after , html *:before { background-image : none !important } html { background-color : #333 !important ; border-color     : #444 !important } body { background-color : transparent !important /* sometimes body is not stretched over whole page height */ ; border-color     : #666 !important ; color            : #ccc !important } body#body { background-color: #333 !important } body * , html *:after , html *:before { background-color : transparent !important ; border-color     : #666        !important /* "inherit" is bugged ! */ ; color            : inherit     !important ; text-shadow      : none        !important } /* what about outline and box-shadow? */ /*** semantic blocks */ /** top header: */ /* - wannabe */ .head  , .header  , *[id*="title"]  , *[id*="Title"]  , *[id*="head"]  , *[id*="Head"]  , *[class*="header"]  , *[class*="Header"]  , *[id*="hlavicka"]  , *[id*="Hlavicka"]  , *[class*="hlavicka"]  , *[class*="Hlavicka"] { background-color : #404040 !important } /* - real */ header  , #head  , #header  , #top { background-color : #222 !important } /** navigation ( the "menu predicting magic" ) */ /* - wannabe */ *[id*="nav"] *[class*="page"] , .navlist a  , .Navlist a  , *.navigation a  , *[id*="menu"] a  , *[id*="Menu"] a  , *[id*="navig"] a  , *[id*="Navig"] a  , *[id*="-nav"] a  , *[id*="-Nav"] a  , *[id$="nav"] a  , *[id$="Nav"] a  , *[class*="menu"] a  , *[class*="Menu"] a  , *[class*="navig"] a  , *[class*="Navig"] a  , *[class*="-nav"] a  , *[class*="-Nav"] a  , *[class$="nav"] a  , *[class$="Nav"] a { background-color : #282839 !important } /* - real */ label  , /* ! label added, let"s see */ nav a  , menu a  , #menu a  , #navigation a { background-color : #223 !important } div[class*=menu][class*=vertical] { background-color: #334 !important } /* above ID selectors would override below rules due # selector priority so that"s why this : */ #menu a:hover  , #navigation a:hover , *[class*="menu"][class*="item"]:hover { background-color : #000 !important } /** aside: */ /* - wannabe */ div[id*="side"]  , div[id*="Side"]  , div[class*="side"]  , div[class*="Side"] { background-color : #404040 !important } /* - real */ aside  , .aside  , #aside { background-color : #444 !important } /** footer */ footer  , div[id*="foot"]  , div[class*="foot"]  , div[id*="paticka"]  , div[class*="paticka"] { background-color : #444 !important } /** others semantic blocks ( yet unimplemented ) */ /* article { } #main { } #content { } section  , .section { } .divider { } /* */ /** anonymous heading elements */ *[class*="heading"]  , *[class*="Heading"]  , *[id*="heading"]  , *[id*="Heading"]  , *[class*="nadpis"]  , *[class*="Nadpis"]  , *[id*="nadpis"]  , *[id*="Nadpis"] { border-color : #888 !important ; color        : #eee !important } /*** concrete HTML block elements */ /** headers h1 , h2 , h3 , h4 , h5 , h6 caption , th , lh , dt , legend */ h1 { background-color : #000 !important ; border-color     : #eee !important ; color            : #fff !important } h2  , h3  , h4  , h5  , h6  , caption  , /* table h. */ thead  , th  , /* table-row|column h. */ lh  , /* list h. html3. how f***ing usefull element. deprecated. */ dl dt  , /* definition h. */ html fieldset legend   /* form h. */ { background-color : #222 !important ; border-color     : #999 !important ; color            : #eee !important } /** other stuff now they have the same colour; it would be nice if it was distinguishable simply by colour */ blockquote  , code  , tt  , /* code and tt is inline */ xmp  , pre { background-color : #404040 !important } td { border-color     : #555 !important } hr { background-color : #666 !important ; border-color     : #666 !important ; color            : #666 !important } /*** concrete HTML inline elements - just colour altered */ /** emphasis: */ /* - wannabe */ *[id*="important"]  , *[id*="Important"]  , *[class*="important"]  , *[class*="Important"] { border-color : #666 !important ; color        : #fff !important } /* - wannabe #2 ( yes, it is NOT semantic, but this is usefull, trust me ;] ) */ b  , b *  , i  , i * { border-color : #555 !important ; color        : #eee !important } /* - real */ tt  , var  , em  , em *  , strong  , strong * { border-color : #666 !important ; color        : #fff !important } /*** common "semantic" classes initally based on WHATWG HTML5 specs draft ("semantic classes" have been rejected) but here may be very usefull */ /** other not-so-common classes */ .copyright { color : #ccc !important } .error { color : #f66 !important } .warning { color : #f99 !important } .example { color : #cff !important } .issue { color : #f99 !important } .note { color : #cff !important } .search { color : #cff !important } /** other funny WHATWG stuff * / *[irrelevant] {} /* */ /** links and interactive stuff that is: links, labels and any other form element with :hover / :active / :focus states */ /* tables, lets see */ table { background-color: #404040 !important } thead  , tfoot { background-color: #333 !important } /* "onclick warning"raising priority */ html body *[onclick]:hover , html body *[ondblclick]:hover , a[href^="javascript:"] , a[href="#"] { background-color : #300 !important } /* properly coded label will behave as unvisited link */ label[for]  , a:link  , a:link * { border-color : #399 !important ; color        : #9ef !important } label[for]:focus  , label[for]:hover  , a:link:focus  , a:link:hover { background-color : #000 !important ; border-color     : #9ef !important ; color            : #eff !important } a:link:focus *  , a:link:hover * { border-color : #9ef !important ; color        : #eff !important } a:visited  , a:visited * { border-color : #690 !important ; color        : #9c3 !important } a:visited:focus  , a:visited:hover { background-color : #000 !important ; border-color     : #9c3 !important ; color            : #cf9 !important } a:visited:focus *  , a:visited:hover * { border-color : #9c3 !important ; color        : #cf9 !important } a:visited:focus img , a:visited:hover img { outline-width: 1px ; outline-style: solid ; outline-color : #9c3 !important ; color        : #cf9 !important } /* active link. no matter if visited or not */ a:active  , a:active * { border-color : #600 !important ; color        : #f33 !important } /** form elems and some IMO neat effects */ .button , .tlacitko , html button  , html select  , html input { background-color : #222 !important } html input[type="password"] { background-color : #755 !important } html textarea  , html input[type="text"]  , html input:not([type]) { background-color : #555 !important ; color: #fff !important } html textarea:hover  , html input[type="text"]:hover  , html input:not([type]):hover {} html input:hover , html button:hover , html select:hover , html textarea:hover { color : #fff !important ; border-color: #ccc !important ; background-color : #444 !important } html textarea:focus  , html input:focus  , html textarea:focus , html button:focus { background-color : #000 !important ; border-color     : #999 !important ; color: #ccc !important } html textarea:focus:hover  , html input:focus:hover  , html button:focus:hover , html textarea:focus:hover { border-color     : #fff !important } html input[type="password"]:focus { background-color : #300 !important } input[disabled] { color : #888 !important } /*** fixes and tweaks most of them are IMO obsolete */ /** FF3 fix, hope it will work +2008-08-18+ is it still necessary? +2012-07-12+ yes, it is, again (?) */ html button  , html select  , html input  , html textarea { -moz-appearance : none !important ; background-image: none !important /* these might be also :empty, so thats why this */ } /** give solid bg to some elems that deserve it */ /* dropdowns that was not catched * by above "menu predicting magic"*/ *[id*="content"]  , *[class*="content"]  , li:hover li , /* wd DOM inspector */ div[id^=webdeveloper] { background-color : #333 !important } /* flashblock. bruteforce. */ div[style~="url(chrome://flashblock/content/flash.png)"] { background-color : #630 !important } /* last.fm */ td.quantifier > div  , div.graph > div#tomGraph { background-color : #222 !important } /* search hilite */ span#__firefox-findbar-search-id { background-color : #9ff !important } *[class*=block][style*=block]  , *[class*="wrap"] , *[id*="notify"] , *[id*="widget"] , *[id*="pane"] , *[class*="widget"] , *[class*="Overlay"][class*="Dialog"] , *[class*="modal"] , *[id*="modal"] , *[class*="dialog"] , *[id*="wrapper"] , *[class*="wrapper"] , *[id*="Wrapper"] , *[class*="Wrapper"] , *[id*="tooltip"] , *[class*="tooltip"] , *[id*="Tooltip"] , *[class*="Tooltip"] , *[id*="popup"] , *[class*="popup"] , *[id*="Popup"] , *[class*="Popup"] , *[id*="flyout"] , *[class*="flyout"] , *[id*="Flyout"] , *[class*="Flyout"] , #pop { background-color : #222 !important } /* hovered images: light background helps with dark graphic text with transparency */ img:hover { background-color: #ccc !important } /* § view-source */ body#viewsource { margin: 0 !important } body#viewsource , body#viewsource pre { background-color: #161616 !important } body#viewsource .start-tag { color: #fca !important } body#viewsource .end-tag { color: #fca !important } body#viewsource .comment { color: #bbff66 !important } body#viewsource .cdata { color: #eedddd !important } body#viewsource .doctype { color: #ffbbbb !important } body#viewsource .pi /* wut? processing instructions? */ { color: #ff68ff !important ; font-style: italic } body#viewsource .entity { color: #ff68ff !important } body#viewsource .text { color: #ffe6cc !important } body#viewsource .attribute-name { color: #dcf0ff !important } body#viewsource .attribute-value { color: #88ddff !important } body#viewsource .markupdeclaration { color: #ffff37 !important } body#viewsource .error , body#viewsource .error > :-moz-any(.start-tag, .end-tag, .comment, .cdata, .doctype, .pi, .entity, .attribute-name, .attribute-value) { color: #f33 !important ; font-weight: bold; } /* forum.pspad.com */ .Item.New strong , span.newmessage { color: #f66 !important } /* jquery autocomplete */ div.ac_results ul[style] , /* gmail, dropdowns ( [role="listbox"] */ *[role] , /* */ li#imagebox_bigimages > div , /* google top header */ #tphdr.tphdr , /* google images hover detail */ #rg_h.rg_hv { background-color: #222 !important } /* common progressmeters / progressbars / selected */ #loading .lpb #lpt  , /* gmail listbox selected div#:sm.ah.aiv[style] > div[role="option"].Jd-AxF.Jd-Je.Je */ div[role="option"].Jd-axF.Jd-Je.Je  , /* gmail focused row (cells) */ .oZ-x3.xY.GZubNd  , .PF.xY.PE  , /* <div class="pas fbQuestionsPollResultsBar" title="Twice?"> <div class="shaded" style="width:25.6%"></div> */ [style^="width:"][style$="%"]  , [style^="width:"][style$="%"]  , [style^="width:"][style$="%;"]  , [style^="width:"][style$="%;"]  , [class*="progress"][style]  , [width$="%"][style]  , [class*="bar"][style] /* hm */ { background-color: #000 !important } /* [style*="left:"][style*="top:"]:hover * {background-color: #333 !important; } */ /** current / active usefull especially for - "active" tabs, - "current" links in menu */ /* jquery autocomplete */ .ac_results .ac_even.ac_over  , .ac_results .ac_odd.ac_over  , #current  , #selected  , #active  , .current  , .selected  , .active  , .current a , .selected a  , .active a { background-color : #000 !important ; color            : #fff !important } *[id*=Current]  , *[id*=Selected]  , *[id*=Active]  , *[id*=current]  , *[id*=selected]  , *[id*=active] , *[class*=Current]  , *[class*=Selected]  , *[class*=Active]  , *[class*=current]  , *[class*=selected]  , *[class*=active] , *[id*=Current] a , *[id*=Selected] a  , *[id*=Active] a  , *[id*=current] a  , *[id*=selected] a  , *[id*=active] a , *[class*=Current] a  , *[class*=Selected] a  , *[class*=Active] a  , *[class*=current] a  , *[class*=selected] a  , *[class*=active] a { background-color : #111 !important ; color            : #eee !important } /* back to transparency */ div#lbHoverNav a#lbPrev , div#lbHoverNav a#lbNext , /* FB photo tag boxes clashes with [style] progressmeters, this is more or less just temporal hotfix #fbPhotoSnowliftTagBoxes [style] , #fbPhotoPageTagBoxes [style] , .tagsWrapper .tagBox[style] , .stageActions .faceBox , */ .tagsWrapper , div.faceBox[style] , div.tagBox[style] , /* LH image */ a.noHrefOverride , a.noHrefOverride:hover , a.noHrefOverride:focus , /* fancybox (lightbox) next/prev block links */ [id$="overlay"] + [id$="wrap"] > [id$="outer"] > a {background-color: transparent !important; } /* END "myfavolours" - global custom colour scheme http://userstyles.org/styles/2187 */';
document.documentElement.appendChild(styleTag);
