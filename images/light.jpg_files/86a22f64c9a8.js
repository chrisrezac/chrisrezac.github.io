__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var s=r(d[3]).connect(function(s,t){return{users:r(d[0]).getFeedAysfUsers(s,t),shouldRenderContactImportUpsell:r(d[1]).shouldRenderContactImportUpsell(s,'CHAINING_LIST_ITEM')}},function(s){return{onSuggestionDismissed(t){s(r(d[2]).dismissFeedAysfSuggestion(t))}}})(i(d[4]));e.default=s},13238272,[10289241,10289242,10289278,5,13107202]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0]).createSelector(t=>t.contactImport.ids,t=>t.toArray());e.getContactUserIDs=t,e.getContactUsers=(s=>(r(d[1]).getUsersByIds(s,t(s))||[]).map(t=>({user:t,relationship:r(d[2]).getRelationship(s.relationships,t.id)}))),e.shouldRenderContactImportUpsell=((t,s)=>{var c;const n=t.contactImport.canImportContacts,o=!t.contactImport.upsellStatus.get('chainingListUpsellDismissed'),l=!t.contactImport.upsellStatus.get('emptyFeedCarouselCardDismissed'),u=null===(c=t.settings.privacyAndSecurityData)||void 0===c?void 0:c.allowContactsSync.value;switch(s){case'CONTACTS_LIST':case'NO_CONTACTS':case'NUX':return n;case'LIST_ITEM':return n&&!u;case'EMPTY_FEED_CAROUSEL_CARD':return l&&n&&!u;case'CHAINING_LIST_ITEM':return o&&n&&!u;default:return!1}})},10289242,[9,9895968,10158088]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const s=r(d[1])(1691),o=o=>{a(d[2]).useEffect(()=>{const{position:s,trackingToken:t,type:n}=o;null!=s&&r(d[3]).logNetEgoEvent({containerModule:r(d[3]).NETEGO_CONTAINER_MODULES.feed,eventName:'instagram_netego_impression',isFromNeedyUser:!0,position:s,trackingToken:t,type:n})},[o.position]);const{className:t,impressionModule:n,onSuggestionDismissed:l,users:c,shouldRenderContactImportUpsell:_,variant:u}=o;return a(d[2]).createElement(i(d[4]),{analyticsContext:r(d[5]).CONNECTIONS_CONTAINER_MODULES.feed_timeline,chainingSuggestions:c,className:i(d[6])(t,`${u===r(d[7]).VARIANTS.narrow?"bq3Mi":""} ${u===r(d[7]).VARIANTS.wide?"vboSt":""} ${r(d[8]).isMobile()?"D_6tu":""} ${r(d[8]).isMobile()?"":"_6E_wP"}`),clickPoint:'feed_h_scroll_suggested_user_list',impressionModule:n,isSmallScreen:u===r(d[7]).VARIANTS.narrow,onSuggestionDismissed:l,seeAllHref:r(d[9]).DISCOVER_PEOPLE_PATH,shouldRenderContactImportUpsell:_,showDescription:!0,title:s})};o.defaultProps={impressionModule:r(d[5]).VIEW_MODULES.hscroll_feed};var t=o;e.default=t},13107202,[13107203,9895940,3,13107204,13107205,10158219,9895960,13107206,9895948,10158348]);
__d(function() {},13107203,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});e.NETEGO_CONTAINER_MODULES={feed:"feed"},e.logNetEgoEvent=function({containerModule:t,eventName:o,isFromNeedyUser:n,position:c,trackingToken:_,type:s}){const l={is_from_needy_user:Boolean(n),position:c,device_model:r(d[0]).getBrowserString(),device_os:'Web',gap_to_last_netego:-1,primary_locale:r(d[1]).getLocale(),deviceid:r(d[2]).getDeviceOrMachineId(),tracking_token:_,type:s};r(d[3]).logPigeonEvent(r(d[4]).createEvent(o,r(d[3]).getExtra(l),{module:t}))}},13107204,[9895948,9895951,10158333,10158131,10158309]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=r(d[1])(2929),n={cardWidth:156,gapWidth:5,gutterWidth:20,height:208},o={cardWidth:176,gapWidth:24,gutterWidth:24,height:208};class l extends a(d[3]).Component{constructor(t){super(t),this.$FollowChainingList3=(()=>{this.$FollowChainingList1=!0,this.$FollowChainingList4(),this.props.onScrollEnter&&this.props.onScrollEnter()}),this.$FollowChainingList5=(()=>{this.$FollowChainingList1=!1,this.props.onScrollLeave&&this.props.onScrollLeave()}),this.$FollowChainingList6=(({leftPct:t,rightPct:n})=>{this.$FollowChainingList7=Math.max(0,Math.floor(t)),this.$FollowChainingList8=Math.max(0,Math.floor(n)),this.$FollowChainingList4()}),this.$FollowChainingList1=!1,this.$FollowChainingList2={}}$FollowChainingList4(){if(this.$FollowChainingList1&&null!=this.$FollowChainingList7&&null!=this.$FollowChainingList8&&null!=this.props.chainingSuggestions)for(let t=this.$FollowChainingList7;t<=this.$FollowChainingList8;++t){const n=this.props.chainingSuggestions[t];if(null!=n&&!this.$FollowChainingList2[n.id]){const{impressionModule:o}=this.props,l={targetId:n.id,containerModule:this.props.analyticsContext,position:t,viewModule:o};o===r(d[2]).VIEW_MODULES.web_profile_chaining?r(d[2]).logConnectionAction({eventName:'similar_user_impression',...l}):o!==r(d[2]).VIEW_MODULES.hscroll_feed&&o!==r(d[2]).VIEW_MODULES.end_of_feed||r(d[2]).logConnectionAction({eventName:'recommended_user_impression',...l}),this.$FollowChainingList2[n.id]=!0}}}render(){const{analyticsContext:l,chainingFailed:s,chainingSuggestions:h,className:c,clickPoint:p,impressionModule:u,isSmallScreen:C,onRetryClicked:w,onSuggestionDismissed:L,overscan:E,seeAllHref:$,shouldRenderContactImportUpsell:F,showDescription:S,title:W}=this.props,_=C?n:o;let f=h&&h.map((t,n)=>a(d[3]).createElement(i(d[4]),{analyticsContext:l,clickPoint:p,impressionModule:u,isSmallScreen:C,key:t.id,onDismissed:L,position:n,showDescription:S,user:t}));return null!=f&&F&&f.splice(2,0,a(d[3]).createElement(i(d[5]),{analyticsContext:l,key:"contactImport",variant:"CHAINING_LIST_ITEM"})),null!=f&&(f=f.map(t=>a(d[3]).createElement(r(d[6]).Box,{alignItems:"center",height:_.height,key:t.key,width:_.cardWidth+_.gapWidth},a(d[3]).createElement(r(d[6]).Box,{width:_.cardWidth},t)))),a(d[3]).createElement(i(d[7]),{className:i(d[8])(c,`ccgHY ${C?"l9Ww0":""} ${C?"":"GZkEI"}`),onScrollEnter:this.$FollowChainingList3,onScrollLeave:this.$FollowChainingList5},!0!==s&&!h&&a(d[3]).createElement("div",{className:"_7AQG4"},a(d[3]).createElement("p",null,t)),!0===s&&a(d[3]).createElement(i(d[9]),{className:"fNpwd",errorText:r(d[1])(75),onRetry:i(d[10])(w)}),!0!==s&&h&&a(d[3]).createElement("div",{className:"EM8Od"},a(d[3]).createElement("span",{className:"Rebts"},W),null!=$&&''!==$&&a(d[3]).createElement(i(d[11]),{href:$,onClick:this.props.onSeeAllClicked})),!0!==s&&h&&null!=f&&a(d[3]).createElement(r(d[6]).Box,{height:_.height},a(d[3]).createElement(i(d[12]),{gutterWidth:Math.max(0,_.gutterWidth-_.gapWidth/2),itemWidth:_.cardWidth+_.gapWidth,onVisibilityChange:this.$FollowChainingList6,overscan:E},f)))}}l.defaultProps={shouldRenderContactImportUpsell:!1,showDescription:!1};var s=l;e.default=s},13107205,[13107207,9895940,10158219,3,13107208,10289247,9895964,12517379,9895960,12386336,9895943,10289244,13107209]);
__d(function() {},13107207,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const o=77,t=54;var l=r(d[12]).withRouter(class extends a(d[5]).Component{constructor(...o){super(...o),this.$FollowCard4=(o=>{this.$FollowCard3('avatar'),o.stopPropagation()}),this.$FollowCard5=(o=>{this.$FollowCard3('username'),this.$FollowCard1(this.$FollowCard2()?'similar_username_tapped':'recommended_username_tapped'),o.stopPropagation()}),this.$FollowCard6=(o=>{this.$FollowCard3('follow'),this.$FollowCard1(this.$FollowCard2()?'similar_user_follow_button_tapped':'recommended_follow_button_tapped'),o.stopPropagation()}),this.$FollowCard7=(()=>{const{onDismissed:o,user:{id:t}}=this.props;this.$FollowCard1(this.$FollowCard2()?'similar_user_dismiss_tapped':'recommended_user_dismissed'),o&&o(t)}),this.$FollowCard8=(()=>{const{user:{username:o}}=this.props;null!=o&&''!==o||i(d[1])(0);const t=r(d[2]).buildUserLink(o);this.props.history.push(t)})}$FollowCard1(o){const{analyticsContext:t,impressionModule:l,position:s,user:n}=this.props;r(d[3]).logConnectionAction({eventName:o,position:s,targetId:n.id,containerModule:t,viewModule:l})}$FollowCard2(){return this.props.impressionModule===r(d[3]).VIEW_MODULES.web_profile_chaining}$FollowCard3(o){r(d[4]).logAction_DEPRECATED('chainingClick',{source:this.props.analyticsContext,target:o})}$FollowCard9(o){return o.length<33?o:o.substr(0,30)+'…'}$FollowCard10(){const{showDescription:o,user:{suggestionDescription:t}}=this.props;return o&&null!=t}$FollowCard11(){const{isSmallScreen:l,user:{profilePictureUrl:s,username:n}}=this.props;return null!=s&&''!==s||i(d[1])(0),a(d[5]).createElement(i(d[6]),{canTabFocus:!1,isLink:!0,onClick:this.$FollowCard4,profilePictureUrl:s,size:l?o:t,username:n})}$FollowCard12(){const{user:{fullName:o,isVerified:t,username:l}}=this.props;return null!=l&&''!==l||i(d[1])(0),null!=t||i(d[1])(0),a(d[5]).createElement(a(d[5]).Fragment,null,a(d[5]).createElement(i(d[7]),{className:"Qj3-a",onClick:this.$FollowCard5,username:l},!0===this.$FollowCard10()&&null!=o&&''!==o&&o.length>0?o:l),t&&a(d[5]).createElement(r(d[8]).Box,{marginStart:1},a(d[5]).createElement(r(d[8]).VerifiedBadge,null)))}$FollowCard13(){const{user:{fullName:o,suggestionDescription:t}}=this.props;return!0!==this.$FollowCard10()?a(d[5]).createElement("span",{className:i(d[9])('notranslate',"_7cyhW"),title:o},o):a(d[5]).createElement("span",{className:"_0p1Te",title:t},this.$FollowCard9(t))}$FollowCard14(){const{analyticsContext:o,clickPoint:t,user:{id:l,username:s}}=this.props;return a(d[5]).createElement(i(d[10]),{analyticsContext:o,analyticsExtra:{chn:1},clickPoint:t,fullWidth:!0,onClick:this.$FollowCard6,userId:l,username:s})}render(){const{analyticsContext:o,isSmallScreen:t,onDismissed:l}=this.props;return a(d[5]).createElement(i(d[11]),{analyticsContext:o,icon:this.$FollowCard11(),isSmallScreen:t,onClick:this.$FollowCard8,onDismissed:l?this.$FollowCard7:null,primaryCta:this.$FollowCard14(),primaryText:this.$FollowCard12(),secondaryText:this.$FollowCard13()})}});e.default=l},13107208,[13107210,9699436,9895961,10158219,10158131,3,9895946,9895947,9895964,9895960,10158218,10289255,6]);
__d(function() {},13107210,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),r(d[1]);var t=class extends a(d[3]).Component{constructor(...t){super(...t),this.$FollowChainingListItem2=(t=>{const{onDismissed:n}=this.props;this.$FollowChainingListItem1('dismiss'),n&&n(),t.stopPropagation()}),this.$FollowChainingListItem3=(()=>{const{onClick:t}=this.props;this.$FollowChainingListItem1('other'),t&&t()})}$FollowChainingListItem1(t){this.props.analyticsContext&&r(d[2]).logAction_DEPRECATED('chainingClick',{source:this.props.analyticsContext,target:t})}render(){const{icon:t,isSmallScreen:n,onDismissed:o,primaryCta:s,primaryText:l,secondaryText:c}=this.props;return a(d[3]).createElement("div",{className:"_41KYi",onClick:this.$FollowChainingListItem3,role:"button",tabIndex:"-1"},a(d[3]).createElement(r(d[4]).Box,{alignItems:"center",padding:n?4:5,width:"100%"},o&&a(d[3]).createElement("button",{alt:r(d[5])(3601),className:"fUzmR",onClick:this.$FollowChainingListItem2},a(d[3]).createElement("div",{className:`${n?"coreSpriteDismissSmall":""} ${n?"":"coreSpriteDismissLarge"}`})),a(d[3]).createElement(r(d[4]).Box,{marginBottom:n?2:5},t),a(d[3]).createElement(r(d[4]).Box,{alignItems:"center",direction:"row",justifyContent:"center",marginBottom:1,width:"100%"},l),a(d[3]).createElement(r(d[4]).Box,{alignItems:"center",direction:"row",justifyContent:"center",marginBottom:n?2:3,width:"100%"},c),s))}};e.default=t},10289255,[9895938,10289261,10158131,3,9895964,9895940]);
__d(function() {},10289261,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(2132),s=r(d[0])(3322),o=r(d[0])(984),n=r(d[0])(1620),c=r(d[0])(58),C=r(d[0])(2827),I=r(d[0])(1869),l=r(d[0])(3072),E=r(d[0])(2922),T=r(d[0])(996),_=()=>i(d[1])._("24")&&a(d[2]).createElement(r(d[3]).Text.Footnote,{color:"ig-secondary-text",textAlign:"left"},T,a(d[2]).createElement(i(d[4]),{href:r(d[5]).CONTACT_IMPORT_DATA_POLICY_PATH},' ',r(d[6]).LEARN_MORE,'.'));class p extends a(d[2]).Component{constructor(t){super(t),this.$ImportContacts1=(()=>{i(d[7])(this.props.history).push(r(d[5]).DISCOVER_PEOPLE_SUGGESTTED_PATH)}),this.$ImportContacts4=(()=>{i(d[7])(this.props.history).push(r(d[5]).DISCOVER_PEOPLE_CONTACTS_PATH)}),this.$ImportContacts5=(()=>{const{onDismissed:t,variant:s}=this.props;'CHAINING_LIST_ITEM'===s?r(d[8]).getUserPreferences().setItem('showContactImportFeedUnitUpsell',!1):'EMPTY_FEED_CAROUSEL_CARD'===s&&r(d[8]).getUserPreferences().setItem('showContactImportEmptyFeedCarouselUpsell',!1),t&&t()}),this.state={showLegalDialog:!1}}$ImportContacts2(){const{shouldRender:t,variant:s}=this.props;switch(s){case'CHAINING_LIST_ITEM':case'CONTACTS_LIST':case'EMPTY_FEED_CAROUSEL_CARD':case'NO_CONTACTS':case'NUX':return t;case'LIST_ITEM':return t&&this.$ImportContacts3();default:return!1}}$ImportContacts3(){const{analyticsContext:t}=this.props;switch(t){case r(d[9]).CONNECTIONS_CONTAINER_MODULES.discover_people:case r(d[9]).CONNECTIONS_CONTAINER_MODULES.newsfeed_you:case r(d[9]).CONNECTIONS_CONTAINER_MODULES.self_following:return!0;case r(d[9]).CONNECTIONS_CONTAINER_MODULES.follow_requests:case r(d[9]).CONNECTIONS_CONTAINER_MODULES.self_followers:case r(d[9]).CONNECTIONS_CONTAINER_MODULES.feed_timeline:default:return!1}}$ImportContacts6(){const{variant:t}=this.props;switch(t){case'LIST_ITEM':return a(d[2]).createElement(r(d[3]).BorderedIcon,{alt:r(d[0])(2577),icon:r(d[3]).ICONS.CONTACT_IMPORT_SM,size:r(d[3]).CORE_CONSTANTS.AVATAR_SIZES.medium});case'CHAINING_LIST_ITEM':case'CONTACTS_LIST':case'EMPTY_FEED_CAROUSEL_CARD':case'NUX':return a(d[2]).createElement(r(d[3]).BorderedIcon,{alt:r(d[0])(2577),icon:r(d[3]).ICONS.CONTACT_IMPORT,size:62});case'NO_CONTACTS':return a(d[2]).createElement(r(d[3]).BorderedIcon,{alt:r(d[0])(1057),icon:r(d[3]).ICONS.USER_OUTLINE_24_GREY9,size:62});default:return null}}$ImportContacts7(){const{variant:s}=this.props;switch(s){case'CHAINING_LIST_ITEM':case'EMPTY_FEED_CAROUSEL_CARD':case'LIST_ITEM':return I;case'CONTACTS_LIST':case'NUX':return t;case'NO_CONTACTS':return n;default:return null}}$ImportContacts8(){const{variant:t}=this.props;switch(t){case'CHAINING_LIST_ITEM':case'EMPTY_FEED_CAROUSEL_CARD':case'LIST_ITEM':return l;case'CONTACTS_LIST':case'NUX':return o;case'NO_CONTACTS':return c;default:return null}}$ImportContacts9(){const{isProcessing:t,variant:o}=this.props;switch(o){case'CHAINING_LIST_ITEM':case'EMPTY_FEED_CAROUSEL_CARD':case'LIST_ITEM':return a(d[2]).createElement(r(d[3]).Button,{fullWidth:'CHAINING_LIST_ITEM'===o,loading:t,onClick:()=>{this.setState({showLegalDialog:!0})}},E);case'CONTACTS_LIST':case'NUX':return a(d[2]).createElement(r(d[3]).Button,{fullWidth:!0,large:!0,loading:t,onClick:this.props.onImportContacts},s);case'NO_CONTACTS':return a(d[2]).createElement(r(d[3]).Button,{borderless:!0,onClick:this.$ImportContacts1},C);default:return null}}$ImportContacts10(){const{analyticsContext:t,hideAction:o,isProcessing:n,isSmallScreen:c,variant:C}=this.props;switch(C){case'NUX':return a(d[2]).createElement(i(d[10]),{bodyText:this.$ImportContacts8(),buttonText:s,headerText:this.$ImportContacts7(),hideAction:o,icon:this.$ImportContacts6(),isProcessing:n,onButtonClick:this.props.onImportContacts});case'LIST_ITEM':return a(d[2]).createElement(r(d[3]).Box,{marginBottom:1},a(d[2]).createElement(r(d[3]).ListItem,{action:this.$ImportContacts9(),icon:this.$ImportContacts6(),subtitle:this.$ImportContacts8(),title:a(d[2]).createElement(r(d[3]).Text.BodyEmphasized,null,this.$ImportContacts7())}));case'CHAINING_LIST_ITEM':return a(d[2]).createElement(i(d[11]),{analyticsContext:t,icon:this.$ImportContacts6(),isSmallScreen:i(d[7])(c),onClick:this.$ImportContacts4,onDismissed:this.$ImportContacts5,primaryCta:this.$ImportContacts9(),primaryText:a(d[2]).createElement(r(d[3]).Box,{marginBottom:2},a(d[2]).createElement(r(d[3]).Text.BodyEmphasized,null,this.$ImportContacts7())),secondaryText:a(d[2]).createElement(r(d[3]).Box,{marginBottom:3},a(d[2]).createElement(r(d[3]).Text.Footnote,{color:"ig-secondary-text"},this.$ImportContacts8()))});case'EMPTY_FEED_CAROUSEL_CARD':return a(d[2]).createElement(r(d[12]).UpsellCard,{body:this.$ImportContacts8(),button:this.$ImportContacts9(),header:this.$ImportContacts7(),icon:this.$ImportContacts6(),onDismiss:this.$ImportContacts5});default:return a(d[2]).createElement(r(d[3]).Box,{alignItems:"center",justifyContent:"center",marginTop:15},a(d[2]).createElement(r(d[3]).Box,{alignItems:"center",justifyContent:"center",padding:9},a(d[2]).createElement(r(d[3]).Box,{paddingY:3},this.$ImportContacts6()),a(d[2]).createElement(r(d[3]).Box,{paddingY:3},a(d[2]).createElement(r(d[3]).Text.Headline2,null,this.$ImportContacts7())),a(d[2]).createElement(r(d[3]).Box,{paddingY:3},a(d[2]).createElement(r(d[3]).Text.Body,{color:"ig-secondary-text",textAlign:"center"},this.$ImportContacts8())),a(d[2]).createElement(r(d[3]).Box,{paddingY:3,width:"100%"},this.$ImportContacts9()),a(d[2]).createElement(r(d[3]).Box,{paddingY:4},a(d[2]).createElement(_,null))))}}render(){return this.$ImportContacts2()?a(d[2]).createElement(a(d[2]).Fragment,null,this.$ImportContacts10(),this.state.showLegalDialog&&a(d[2]).createElement(i(d[13]),{hideIcon:!1,onClose:()=>{this.setState({showLegalDialog:!1})},onConfirm:this.props.onImportContacts})):null}}p.defaultProps={hideAction:!1,redirectToContactsPage:!0,isSmallScreen:!1,variant:'CONTACTS_LIST'};var S=r(d[17]).withRouter(r(d[18]).connect(function(t,s){return{isProcessing:t.contactImport.requestInFlight,shouldRender:r(d[14]).shouldRenderContactImportUpsell(t,i(d[7])(s.variant))}},function(t,s){const{redirectToContactsPage:o,variant:n}=s;return{onDismissed(){'CHAINING_LIST_ITEM'===n?t({type:r(d[15]).CI_CHAINING_LIST_UPSELL_DISMISSED}):'EMPTY_FEED_CAROUSEL_CARD'===n&&t({type:r(d[15]).CI_EMPTY_FEED_CAROUSEL_UPSELL_DISMISSED})},onImportContacts(){t(r(d[16]).importContacts({redirectToContactsPage:void 0===o||o}))}}})(p));e.default=S,e.IMPORT_CONTACTS_LEGAL_DISCLAIMER=T,e.LegalDisclaimer=_},10289247,[9895940,10158232,3,9895964,10158157,10158348,9895955,9895943,10289253,10158219,10289254,10289255,10289256,10289257,10289242,10289258,10289259,6,5]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t={AVATAR:{HEIGHT:88,WIDTH:88},CARD:{HEIGHT:344,WIDTH:236},IMAGE:{HEIGHT:74,WIDTH:74}},n=({children:n,dangerouslySetClassName:l,onClick:o})=>a(d[1]).createElement("div",{className:null===l||void 0===l?void 0:l.__className,onClick:o,role:"link",tabIndex:"0"},a(d[1]).createElement(r(d[2]).Box,{alignItems:"center",color:"ig-primary-background",dangerouslySetClassName:{__className:"R-Yxq"},flex:"grow",height:t.CARD.HEIGHT,padding:1,width:t.CARD.WIDTH},n)),l=i(d[3])(({body:l,button:o,dangerouslySetClassName:s,header:c,icon:E,onDismiss:I})=>a(d[1]).createElement(n,{dangerouslySetClassName:s},a(d[1]).createElement(r(d[2]).Box,{alignItems:"center",dangerouslySetClassName:{__className:"_6d4V5"},height:t.AVATAR.HEIGHT,justifyContent:"center",marginTop:11,shape:"circle",width:t.AVATAR.WIDTH},E),a(d[1]).createElement(r(d[2]).Box,{padding:3},a(d[1]).createElement(r(d[2]).Text.Headline2,{textAlign:"center"},c)),I&&a(d[1]).createElement(r(d[2]).Box,{position:"absolute",right:!0},a(d[1]).createElement(r(d[2]).IconButton,{alt:r(d[4])(2592),icon:r(d[2]).ICONS.GREY_CLOSE,onClick:I})),a(d[1]).createElement(r(d[2]).Box,{flex:"grow",paddingX:3},a(d[1]).createElement(r(d[2]).Text.Body,{color:"ig-secondary-text",textAlign:"center"},l)),a(d[1]).createElement(r(d[2]).Box,{marginBottom:5},o)));var o=i(d[3])(n);e.default=o,e.SIZES=t,e.UpsellCard=l},10289256,[10289262,3,9895964,10289263,9895940]);
__d(function() {},10289262,[]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(){r(d[0]).openURL(r(d[1]).CONTACT_IMPORT_DATA_POLICY_PATH)}function o(){const{pixelRatio:t}=i(d[2])();return t>=1.5?"/static/images/ci/contacts-facepile-2x.jpg/ca81c1e43461.jpg 2x":"/static/images/ci/contacts-facepile-1x.jpg/df9b3f3bde41.jpg"}Object.defineProperty(e,'__esModule',{value:!0});const n=n=>a(d[3]).createElement(r(d[4]).Dialog,{body:r(d[5])(3111),media:!n.hideIcon&&a(d[3]).createElement(r(d[4]).Box,{alignItems:"center",justifyContent:"center",width:"100%"},a(d[3]).createElement("img",{alt:r(d[5])(3668),srcSet:o()})),onModalClose:n.onClose,title:r(d[5])(1074)},n.onConfirm&&a(d[3]).createElement(r(d[4]).DialogItem,{color:"ig-primary-button",onClick:n.onConfirm},r(d[6]).GET_STARTED),a(d[3]).createElement(r(d[4]).DialogItem,{color:n.onConfirm?'ig-secondary-button':'ig-primary-button',onClick:t},r(d[6]).LEARN_MORE),a(d[3]).createElement(r(d[4]).DialogItem,{onClick:n.onClose},r(d[6]).CLOSE_TEXT));n.defaultProps={hideIcon:!0};var c=n;e.default=c},10289257,[10158231,10158348,10158246,3,9895964,9895940,9895955]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function(){const[t,n]=r(d[0]).useState(r(d[1]).fetchWindowOrientation()),[o,w]=r(d[0]).useState(window.devicePixelRatio),[s,u]=r(d[0]).useState(window.innerHeight),[c,l]=r(d[0]).useState(window.innerWidth);return r(d[0]).useEffect(()=>{const t=()=>{n(r(d[1]).fetchWindowOrientation),w(window.devicePixelRatio),u(window.innerHeight),l(window.innerWidth)};let o=!1,s=null;if(r(d[3]).isDesktop()){const t=()=>{w(window.devicePixelRatio),s=setTimeout(t,1e3)};t()}const c=i(d[4]).add(window,'resize',()=>{o||(o=!0,r(d[2]).measure(()=>{try{t()}finally{o=!1}}))});return()=>{r(d[3]).isDesktop()&&clearTimeout(s),c.remove()}},[]),{orientation:t,pixelRatio:o,viewportHeight:s,viewportWidth:c}}},10158246,[3,10158251,10158182,9895948,10158129]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),r(d[1]);e.default=(({className:t,errorText:l,onRetry:c,...n})=>a(d[2]).createElement("div",{className:i(d[3])(t,"TqMen")},a(d[2]).createElement("button",{"aria-label":r(d[4]).RETRY_TEXT,className:"_1n6a3",onClick:c,tabIndex:"0"},a(d[2]).createElement("div",{className:"mEFkC coreSpriteReload"}),a(d[2]).createElement("div",{className:"JMO_o"},l||r(d[4]).FAILED_TO_LOAD_TEXT))))},12386336,[9895938,12386347,3,9895960,9895955]);
__d(function() {},12386347,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),r(d[1]);var t=t=>a(d[2]).createElement(i(d[3]),{className:"HUW1v hUQXy",href:t.href,onClick:t.onClick,params:t.params},r(d[4])(1080));e.default=t},10289244,[9895937,10289251,3,9895944,9895940]);
__d(function() {},10289251,[]);
__d(function(g,r,i,a,m,e,d){"use strict";function s(s){return!s.suggestedUsers.viewerHasFBConnect}Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0]).createSelector(s,r(d[1]).isFBConnectEligible,(s,t)=>!s&&(t&&!1!==i(d[2])._("125","0")&&!1!==i(d[2])._("127","2"))),n=r(d[0]).createSelector(s=>s.suggestedUsers.ids,s=>s.suggestedUsers.dismissedAysfIds,(s,t)=>s.subtract(t).toArray()),o=r(d[0]).createSelector(s=>s.suggestedUsers.dismissedAysfIds,(s,t)=>i(d[3])(t.userIds).map(t=>r(d[4]).getUserById(s,t)),(s,t)=>t.filter(t=>!s.has(t.id)).toArray()),u=r(d[0]).createSelector(s=>s.suggestedUsers.ids,s=>s.toArray());e.isViewerFacebookConnected=s,e.shouldDisplayFacebookConnect=t,e.getNonDismissedAysfIds=n,e.getProfileChainingFailure=function(s,t){return!!s.suggestedUsers.profileChainingFailures.get(t)},e.getProfileChainingSuggestions=function(s,t){return s.suggestedUsers.profileChainingSuggestions.get(t)},e.getFeedAysfUsers=o,e.getSuggestions=u,e.isInitialLoad=function(s){return s.suggestedUsers.isLoadingSuggestions&&0===s.suggestedUsers.ids.size}},10289241,[9,10289248,9895963,9895943,9895968]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.isFBConnectEligible=function(n){return n.fb.status!==r(d[0]).STATUS.ineligible},e.isConnected=function(n){return n.fb.status===r(d[0]).STATUS.connected}},10289248,[10289249]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]);const t=t=>a(d[1]).createElement("section",{className:i(d[2])("ABCxa",t.className)},a(d[1]).createElement("div",{className:"JErX0"},a(d[1]).createElement("div",{className:"ig3mj"},t.icon),a(d[1]).createElement("div",{className:"olLwo"},t.headerText),a(d[1]).createElement("div",{className:"f5C5x"},t.bodyText),!t.hideAction&&a(d[1]).createElement(r(d[3]).Button,{disabled:t.buttonDisabled,loading:t.isProcessing,onClick:t.onButtonClick},t.buttonText),t.footer));t.defaultProps={hideAction:!1};var c=t;e.default=c},10289254,[10289260,3,9895960,9895964]);
__d(function() {},10289260,[]);