(function initColor() {
    const themeColors = ["#FFFFFF", "#CCCCCC", "#999999", "#666666", "#333333", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"];
    const themeIncrements = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

    themeColors.forEach((color, index) => {
        const propName = `--ai-create-color-theme-${themeIncrements[index]}`;
        document.documentElement.style.setProperty(propName, color);
    });

    const supportColors = ["#E8FFF8", "#B5F1E2", "#86E3CE", "#5BD4BE", "#35C6B0", "#14B8A6", "#0EA396", "#098D86", "#057776", "#026062", "#00494D"];
    supportColors.forEach((color, index) => {
        const propName = `--ai-create-color-support-${themeIncrements[index]}`;
        document.documentElement.style.setProperty(propName, color);
    });

    const highlightColors = ["#FFFAE8", "#FDEDBA", "#FBDE8E", "#F9CC61", "#F7B736", "#F59E0B", "#D38208", "#B26705", "#904E03", "#6E3801", "#4D2400"];
    highlightColors.forEach((color, index) => {
        const propName = `--ai-create-color-highlight-${themeIncrements[index]}`;
        document.documentElement.style.setProperty(propName, color);
    });

})();

(function initFont() {
    [{
            name: 'Montserrat',
            key: '--custom-heading-font',
            fontFamily: 'Montserrat,ui-sans-serif, system-ui, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
        },
        {
            name: 'Lato',
            key: '--custom-body-font',
            fontFamily: 'Lato,ui-sans-serif, system-ui, -apple-system, blinkmacsystemfont, "Segoe UI", roboto, "Helvetica Neue", arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
        },
    ]
    .forEach(({
        name,
        key,
        fontFamily
    }) => {
        if (name && name !== "undefined") {
            const font = new FontFace(name, `url("/static/font/${name}.ttf")`);
            document.fonts.add(font);
            font.load();
            document.documentElement.style.setProperty(key, fontFamily);
        }
    });
})();
async function render() {
    window.siteRoutes = [{
        "name": "Home",
        "path": "home",
        "title": "Home",
        "isHomePage": true,
        "pageId": "1845990641196515329",
        "sections": ["XEJDQzUQVQTHAiXpAl149", "ik_BlEN-f0mb0GaXjq3AI", "AKRg786eqIFpgY81EoIWk", "x-nfAYnLvEq-5fKwP4Tr0", "5IidrDv76abRDmxQTXpxB", "ZxSZyV5RmmejET8NCPXH7"],
        "footerId": "Mv2a4gGHAeqheBJFz9FdB"
    }, {
        "name": "Portfolio",
        "path": "portfolio",
        "title": "Portfolio",
        "isHomePage": false,
        "pageId": "1845990830741307393",
        "sections": ["9I8pprzWSYyiJjfmKgDGc", "KrbG2GRrMCdQDW74DK3f2", "N20YbYRH-x8g44fPU3KRn", "gqpKOlwjpRhwKAcZkkMV-", "ZMwBPq3VVuyiA61tZAWXL", "piBLUdNA4fVRwy8BfF78Q"],
        "footerId": "Mv2a4gGHAeqheBJFz9FdB"
    }, {
        "name": "Pricelist",
        "path": "pricelist",
        "title": "Pricelist",
        "isHomePage": false,
        "pageId": "1845990673425547266",
        "sections": ["WH-BkiG0SMgMDZLM52UXX", "3RA_4H_8KCGUDt_PBOho4", "VdpSuGoetUW-84Zd2hmTx", "R10w2VQ-43neGonmSiBLx", "qcZDbatTRSREeDs_pr9aE", "EiBoP6sW--asZrY8oC6dA", "HiVVb82f0APOxwk-dTGTq"],
        "footerId": "Mv2a4gGHAeqheBJFz9FdB"
    }];
    window.attachments = [];
    window.turi = {
        "botStatus": 0
    };
    window.currentThreadId = "1845986629060902913";
    window.siteTitle = "Depressedesign";
    window.currentSite = {
        "id": "1845989951623577602",
        "assistantThreadId": "1845986629060902913",
        "subDomain": "depressedesign",
        "title": "Depressedesign",
        "logo": "https://cdn.wegic.ai/assets/onepage/thread/icon/f1e705c8-331e-4a12-aa52-a412c2d5e68d.jpg",
        "favicon": "https://cdn.wegic.ai/assets/onepage/thread/icon/f1e705c8-331e-4a12-aa52-a412c2d5e68d.jpg",
        "thumbnail": "1753679107331.png",
        "description": "\"Minimalist designs that make a statement. Let's create something unforgettable together.\"",
        "removeBadge": 0,
        "status": 3,
        "jsFile": "1753679053432.js",
        "publishDate": "2025-07-28T04:56:44.000+00:00",
        "autoPub": 0,
        "webInfo": {
            "subDomain": "depressedesign",
            "siteTitle": "Depressedesign",
            "siteType": "Others",
            "siteDescription": "A minimalist and elegant website to showcase high-quality designer work through an engaging portfolio and smooth animations, including a detailed pricelist for services.",
            "designStyle": ["Minimalist", "Elegant", "Responsive"],
            "languageStyle": ["Engaging", "Professional", "Creative"],
            "language": "English",
            "imageStyle": "monochrome elegance, minimalist compositions, deep charcoal and muted grayscale, soft lighting, negative space, subtle gradients, high-resolution textures, modernist influence",
            "designScore": [8, 9, 2, 7, 9, 8, 9, 8, 9],
            "styleGuide": "{\"TITLE-PRIMARY\":\"text-5xl font-bold tracking-tight leading-tight\",\"TITLE-SECONDARY\":\"text-4xl font-semibold tracking-normal leading-normal\",\"DESC\":\"text-lg font-normal tracking-normal leading-relaxed\",\"TEXT-CONTENT\":\"text-base font-normal tracking-normal leading-normal\",\"TEXT-LINK\":\"text-lg font-medium tracking-normal leading-normal\",\"BTN-PRIMARY\":\"text-base font-medium tracking-wide leading-normal\",\"BTN-SECONDARY\":\"text-base font-normal tracking-normal leading-normal\",\"CARD\":\"text-base font-normal tracking-normal leading-normal\",\"INPUT\":\"border rounded px-4 py-2 focus:outline-none focus:ring-2\",\"FORM\":\"space-y-4\",\"TABLE\":\"min-w-full table-auto border-collapse\",\"LIST\":\"list-disc list-inside\",\"IMAGE\":\"rounded shadow-lg object-cover\"}",
            "themeColor": "#1A1A1D",
            "themeFont": {
                "headers": "Montserrat",
                "bodyText": "Lato"
            },
            "iconLibrary": {
                "name": "FontAwesome",
                "style": "solid"
            },
            "keywords": ["Portfolio", "Pricelist", "Design", "Creative", "Elegant", "Responsive"]
        },
        "domain": "wegic.app",
        "customDomainRoot": false,
        "domainType": "FREE",
        "createDate": "2024-10-14T16:47:55.000+00:00",
        "updateDate": "2025-07-28T05:05:10.000+00:00",
        "notify": 1,
        "email": "healahmberuh@gmail.com",
        "currency": "USD",
        "publishCurrency": "USD",
        "FCPImageList": "{\"home\":[\"https://cdn.wegic.ai/assets/onepage/img/6cb97d1a-ddfd-49af-83df-3f3a7525d4e1.jpg?args=q%3A85%2Frs%3Afit%3A898%3A898%2Fdpr%3A2%2Fsm%3A1&format=webp\"],\"/\":[\"https://cdn.wegic.ai/assets/onepage/img/6cb97d1a-ddfd-49af-83df-3f3a7525d4e1.jpg?args=q%3A85%2Frs%3Afit%3A898%3A898%2Fdpr%3A2%2Fsm%3A1&format=webp\"],\"portfolio\":[],\"pricelist\":[\"https://images.unsplash.com/photo-1501959181532-7d2a3c064642?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg5NjA5ODF8&ixlib=rb-4.0.3&q=80&w=1920\"]}",
        "customCode": "",
        "googleSEOCode": "",
        "bingSEOCode": "",
        "pinterestSEOCode": "",
        "yandexSEOCode": "",
        "naverSEOCode": ""
    };
    const routerList = [];
    const createRoot = await siteEngine.getPackage("createRoot");
    const React = await siteEngine.getPackage("React");
    const ErrorBoundary = await siteEngine.getPackage("ErrorBoundary");
    const RouterWrap = await siteEngine.getPackage("RouterWrap");
    const ReactRouterDom = await siteEngine.getPackage('ReactRouterDom');
    const createBrowserRouter = ReactRouterDom.createBrowserRouter;
    const RouterProvider = ReactRouterDom.RouterProvider;
    const Navigate = ReactRouterDom.Navigate;
    const AnimateInView = await siteEngine.getPackage('@Basic/AnimateInView');
    const EditableImg = await siteEngine.getPackage('@Basic/EditableImg');
    const EditableText = await siteEngine.getPackage('@Basic/EditableText');
    const EditableButton = await siteEngine.getPackage('@Basic/EditableButton');
    const EditablePayButton = await siteEngine.getPackage('@Basic/EditablePayButton');
    const EditableIcon = await siteEngine.getPackage('@Basic/EditableIcon');
    const EditableMedia = await siteEngine.getPackage('@Basic/EditableMedia');
    const EditableEmbed = await siteEngine.getPackage('@Basic/EditableEmbed');
    const EditableForm = await siteEngine.getPackage('@Basic/EditableForm');
    const EmbedPopover = await siteEngine.getPackage('@Basic/EmbedPopover');
    const EmbedSidetab = await siteEngine.getPackage('@Basic/EmbedSidetab');
    const AIChatBox = await siteEngine.getPackage('@Basic/AIChatBox');
    const ComponentSlot = await siteEngine.getPackage('@Basic/ComponentSlot');
    const Overflow = await siteEngine.getPackage('@Basic/Overflow');
    const {
        debounce,
        throttle
    } = await siteEngine.getPackage('lodash-es');
    const {
        loadStripe
    } = await siteEngine.getPackage('@stripe/stripe-js');
    const {
        EmbeddedCheckout,
        EmbeddedCheckoutProvider
    } = await siteEngine.getPackage('@stripe/react-stripe-js');
    const Dialog = await siteEngine.getPackage('@radix-ui/react-dialog');
    const ScrollAreaPrimitive = await siteEngine.getPackage('@radix-ui/react-scroll-area');
    const Marquee = await siteEngine.getPackage('Marquee'); //跑马灯
    const Carousel = await siteEngine.getPackage('Carousel'); //轮播图
    const motion = await siteEngine.getPackage('motion');
    const framerMotion = await siteEngine.getPackage('framerMotion');
    const AnimatePresence = await siteEngine.getPackage('AnimatePresence');
    const useMotionValue = await siteEngine.getPackage('useMotionValue');
    const useTransform = await siteEngine.getPackage('useTransform');
    const useSpring = await siteEngine.getPackage('useSpring');
    const animate = await siteEngine.getPackage('animate');
    const BuildSiteTip = await siteEngine.getPackage('@Basic/BuildSiteTip');
    let Navigation_1845986629060902913 = /*#__PURE__*/ React.createElement(React.Fragment, null);
    let Footer_1845986629060902913 = /*#__PURE__*/ React.createElement(React.Fragment, null);
    const defaultRouter = "home";

    function Layout(props) {
        return /*#__PURE__*/ React.createElement(RouterWrap, null, true && /*#__PURE__*/ React.createElement(BuildSiteTip, null), Navigation_1845986629060902913, props.children, Footer_1845986629060902913, /*#__PURE__*/ React.createElement(EmbedPopover, null), /*#__PURE__*/ React.createElement(EmbedSidetab, null), /*#__PURE__*/ React.createElement(AIChatBox, null));
    }
    try {
        function Navigation_01({
            logo = "https://images.unsplash.com/photo-1667120564541-b6368f7b1914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjI0NzY2Mjd8&ixlib=rb-4.0.3&q=80&w=1200",
            navItems = ["text=Home&link=/home", "text=About&link=/about", "text=Service&link=/service", "text=Case&link=/case", "text=Blog&link=/blog", "text=Contact&link=/contact", "text=Localtion&link=/localtion", "text=Map&link=/map"],
            primaryButton = {
                icon: "fa-solid fa-arrow-right",
                textAttr: "Contact us",
                textColor: "red"
            },
            secondaryButton,
            fixedTop = true,
            logoSize = 60,
            showButton = true
        }) {
            const [isDropdownOpen, setDropdownOpen] = React.useState(false);
            const [isMobileNavOpen, setMobileNavOpen] = React.useState(false);
            const [isMobileShowNavOpen, setIsMobileShowNavOpen] = React.useState(false);
            const [Max, setMax] = React.useState(3);
            const NavRef = React.useRef(null);
            const dropDownRef = React.useRef(null);
            const [layoutObject, setLayoutObject] = React.useState({
                buttonH: 40,
                buttonPX: 20,
                buttonFont: 14,
                outerPadding: 12,
                dropDownPaddingl: 12,
                dropDownPaddingt: 12,
                dropDownPaddingb: 12,
                dropDownPaddingr: 48,
                dropDownItemLeading: 24,
                dropDownItemFontSize: 14,
                mobileDropDownPaddingY: 20,
                mobileDropDownGap: 8,
                mobileDropDownItemH: 72
            });
            const handleResize = () => {
                var _NavRef$current;
                if (NavRef.current && (_NavRef$current = NavRef.current) !== null && _NavRef$current !== void 0 && _NavRef$current.offsetWidth) {
                    var _NavRef$current2;
                    if (((_NavRef$current2 = NavRef.current) === null || _NavRef$current2 === void 0 ? void 0 : _NavRef$current2.offsetWidth) >= window.innerWidth / 3) {
                        Max === 3 && setMax(2);
                    }
                }
            };
            const handleCloseDropdown = e => {
                if (e.target === dropDownRef.current) return;
                isDropdownOpen && setDropdownOpen(false);
            };
            React.useEffect(() => {
                window.addEventListener("click", handleCloseDropdown);
                return () => {
                    window.removeEventListener("click", handleCloseDropdown);
                };
            }, [isDropdownOpen]);
            React.useEffect(() => {
                window.addEventListener("resize", handleResize);
                handleResize();
                return () => {
                    window.removeEventListener("resize", handleResize);
                };
            }, [Max]);
            React.useEffect(() => {
                let obj;
                if (logoSize <= 48) {
                    // s
                    obj = {
                        buttonH: 40,
                        buttonPX: 20,
                        buttonFont: 14,
                        outerPadding: 12,
                        dropDownPaddingl: 12,
                        dropDownPaddingt: 12,
                        dropDownPaddingb: 12,
                        dropDownPaddingr: 48,
                        dropDownItemLeading: 24,
                        dropDownItemFontSize: 14,
                        mobileDropDownPaddingY: 20,
                        mobileDropDownGap: 8,
                        mobileDropDownItemH: 72
                    };
                } else if (logoSize > 48 && logoSize <= 56) {
                    // m
                    obj = {
                        buttonH: 48,
                        buttonPX: 20,
                        buttonFont: 14,
                        outerPadding: 20,
                        dropDownPaddingl: 20,
                        dropDownPaddingt: 20,
                        dropDownPaddingb: 20,
                        dropDownPaddingr: 80,
                        dropDownItemLeading: 24,
                        dropDownItemFontSize: 14,
                        mobileDropDownPaddingY: 24,
                        mobileDropDownGap: 16,
                        mobileDropDownItemH: 80
                    };
                } else if (logoSize > 56) {
                    // l
                    obj = {
                        buttonH: 56,
                        buttonPX: 28,
                        buttonFont: 16,
                        outerPadding: 28,
                        dropDownPaddingl: 20,
                        dropDownPaddingt: 20,
                        dropDownPaddingb: 20,
                        dropDownPaddingr: 80,
                        dropDownItemLeading: 28,
                        dropDownItemFontSize: 16,
                        mobileDropDownPaddingY: 28,
                        mobileDropDownGap: 24,
                        mobileDropDownItemH: 96
                    };
                }
                setLayoutObject(obj);
            }, [logoSize]);
            React.useEffect(() => {
                let num = 0;
                if (showButton) {
                    if (primaryButton) {
                        num++;
                    }
                    if (secondaryButton) {
                        num++;
                    }
                    num += navItems.length;
                } else {
                    num += navItems.length;
                }
                setIsMobileShowNavOpen(num <= 1 ? false : true);
                if (num <= 1) {
                    setMobileNavOpen(false);
                }
            }, [primaryButton, secondaryButton, navItems, showButton]);
            return /*#__PURE__*/ React.createElement("section", {
                className: `${fixedTop ? "sticky" : "relative"}  top-0 z-40 w-full bg-white/80 backdrop-blur-xl dark:bg-black/80 md:px-8`
            }, /*#__PURE__*/ React.createElement("div", {
                style: {
                    paddingTop: `${layoutObject.outerPadding}px`,
                    paddingBottom: `${layoutObject.outerPadding}px`
                },
                className: "w-full mx-auto max-w-7xl h-full hidden gap-5 md:flex md:grid-cols-[1fr_0.5fr_1fr] md:items-center"
            }, /*#__PURE__*/ React.createElement("div", {
                ref: NavRef,
                className: "w-full h-full flex items-center justify-center text-sm leading-[17px]"
            }, navItems.length > Max ? /*#__PURE__*/ React.createElement("nav", {
                className: `w-full h-full flex items-center justify-start gap-8 text-[${layoutObject.buttonFont}px]`
            }, navItems.slice(0, Max).map((item, index) => /*#__PURE__*/ React.createElement(EditableButton, {
                key: item,
                className: "py-3 text-black whitespace-nowrap cursor-pointer hover:text-black/60 hover:transition-all duration-100 dark:text-white dark:hover:text-white/60",
                onClick: () => setDropdownOpen(false)
            }, /*#__PURE__*/ React.createElement(EditableText, {
                propKey: `navItems_${index}`
            }, item))), /*#__PURE__*/ React.createElement("div", {
                className: "relative"
            }, /*#__PURE__*/ React.createElement(motion.button, {
                className: "py-1 flex items-center",
                onClick: () => {
                    setDropdownOpen(!isDropdownOpen);
                },
                whileTap: {
                    scale: 0.9
                }
            }, /*#__PURE__*/ React.createElement("svg", {
                ref: dropDownRef,
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                className: "w-8 h-8 fill-black dark:fill-white hover:fill-black/60 dark:hover:fill-white/60"
            }, /*#__PURE__*/ React.createElement("path", {
                "fill-rule": "evenodd",
                d: "M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",
                "clip-rule": "evenodd"
            }))), isDropdownOpen && /*#__PURE__*/ React.createElement(AnimatePresence, null, /*#__PURE__*/ React.createElement(motion.div, {
                className: `absolute z-40 right-0 flex flex-col p-1 gap-1 origin-top rounded-lg bg-white border border-black/10 dark:border-white/10 shadow-lg dark:bg-black text-[${layoutObject.buttonFont}px]`,
                animate: {
                    scale: [0, 1],
                    opacity: [0, 1]
                }
            }, navItems.slice(Max, navItems.length).map((item, index) => /*#__PURE__*/ React.createElement(EditableButton, {
                key: item.pagePath,
                style: {
                    paddingTop: `${layoutObject.dropDownPaddingt}px`,
                    paddingBottom: `${layoutObject.dropDownPaddingb}px`,
                    paddingLeft: `${layoutObject.dropDownPaddingl}px`,
                    paddingRight: `${layoutObject.dropDownPaddingr}px`,
                    lineHeight: `${layoutObject.dropDownItemLeading}px`,
                    fontSize: `${layoutObject.dropDownItemFontSize}px`
                },
                className: "w-full h-full text-black whitespace-nowrap cursor-pointer text-left hover:text-black/60 hover:transition-all duration-100 dark:text-white dark:hover:text-white/60",
                onClick: () => setDropdownOpen(!isDropdownOpen)
            }, /*#__PURE__*/ React.createElement(EditableText, {
                propKey: `navItems_${index + Max}`
            }, item))))))) : /*#__PURE__*/ React.createElement("nav", {
                className: `${navItems.length <= 1 ? "hidden" : ""} w-full h-full flex items-center justify-start text-[${layoutObject.buttonFont}px]`
            }, navItems.map((item, index) => /*#__PURE__*/ React.createElement(EditableButton, {
                key: item,
                className: "pr-12 py-3  text-black whitespace-nowrap cursor-pointer hover:text-black/60 hover:transition-all duration-100 dark:text-white dark:hover:text-white/60"
            }, /*#__PURE__*/ React.createElement(EditableText, {
                propKey: `navItems_${index}`
            }, item))))), /*#__PURE__*/ React.createElement("div", {
                className: `w-full h-full flex items-center justify-${showButton ? "center" : "end"}`
            }, /*#__PURE__*/ React.createElement(EditableImg, {
                propKey: `logo`,
                style: {
                    height: `${logoSize}px`
                },
                className: `!w-auto object-cover`,
                src: logo,
                alt: `logo`
            })), /*#__PURE__*/ React.createElement("div", {
                className: `${showButton ? "" : "hidden"} w-full h-full flex items-center justify-end overflow-hidden gap-3`
            }, secondaryButton && /*#__PURE__*/ React.createElement(EditableButton, {
                style: {
                    height: `${layoutObject.buttonH}px`
                },
                className: `BTN-SECONDARY max-w-[180px] w-fit px-5 group text-[${layoutObject.buttonFont}px] whitespace-nowrap font-normal text-black flex gap-2 items-center rounded-full hover:bg-black/5 hover:transition-all hover:duration-300`
            }, /*#__PURE__*/ React.createElement(EditableText, {
                className: `overflow-hidden text-ellipsis`,
                propKey: `secondaryButton_textAttr`
            }, secondaryButton.textAttr), /*#__PURE__*/ React.createElement(EditableIcon, {
                propKey: `secondaryButton_icon`,
                icon: secondaryButton.icon,
                iconLibrary: "FontAwesome",
                className: `text-sm text-black group-hover:translate-x-1 transition-all`
            })), primaryButton && /*#__PURE__*/ React.createElement(EditableButton, {
                style: {
                    height: `${layoutObject.buttonH}px`,
                    color: primaryButton.textColor ? primaryButton.textColor : "black"
                },
                className: `BTN-PRIMARY max-w-[180px] w-fit px-[${layoutObject.buttonPX}px] group text-[${layoutObject.buttonFont}px] whitespace-nowrap font-normal flex gap-2 items-center rounded-full bg-blue-500 hover:bg-blue-600 hover:transition-all hover:duration-300`
            }, /*#__PURE__*/ React.createElement(EditableText, {
                className: `overflow-hidden text-ellipsis`,
                propKey: `primaryButton_textAttr`
            }, primaryButton.textAttr), /*#__PURE__*/ React.createElement(EditableIcon, {
                propKey: `primaryButton_icon`,
                icon: primaryButton.icon,
                iconLibrary: "FontAwesome",
                style: {
                    color: primaryButton.textColor ? primaryButton.textColor : "black"
                },
                className: `text-sm group-hover:translate-x-1 transition-all`
            })))), /*#__PURE__*/ React.createElement("div", {
                style: {
                    paddingTop: `${layoutObject.outerPadding}px`,
                    paddingBottom: `${layoutObject.outerPadding}px`
                },
                className: "relative z-40 w-full h-full flex items-center md:hidden"
            }, /*#__PURE__*/ React.createElement(EditableImg, {
                propKey: `logo`,
                style: {
                    height: `${logoSize}px`
                },
                className: "!w-auto px-6 object-cover",
                src: logo,
                alt: `logo`
            }), /*#__PURE__*/ React.createElement(motion.button, {
                className: `${!isMobileShowNavOpen ? "hidden" : ""} absolute right-6`,
                onClick: () => setMobileNavOpen(!isMobileNavOpen),
                whileTap: {
                    scale: 0.9
                }
            }, isMobileNavOpen ? /*#__PURE__*/ React.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                className: "w-8 h-8 fill-black dark:fill-white"
            }, /*#__PURE__*/ React.createElement("path", {
                "fill-rule": "evenodd",
                d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
                "clip-rule": "evenodd"
            })) : /*#__PURE__*/ React.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                className: "w-8 h-8 fill-black dark:fill-white"
            }, /*#__PURE__*/ React.createElement("path", {
                "fill-rule": "evenodd",
                d: "M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",
                "clip-rule": "evenodd"
            }))), isMobileNavOpen ? /*#__PURE__*/ React.createElement("div", {
                className: "absolute z-50 top-full w-full flex flex-col gap-3 bg-white rounded-b-xl shadow-xl dark:bg-black"
            }, /*#__PURE__*/ React.createElement(motion.nav, {
                style: {
                    paddingTop: `${layoutObject.mobileDropDownPaddingY}px`,
                    paddingBottom: `${layoutObject.mobileDropDownPaddingY}px`
                },
                className: `w-full gap-[${layoutObject.mobileDropDownGap}px] px-2 flex flex-col text-[${layoutObject.buttonFont}px]`,
                animate: {
                    y: [20, 0],
                    opacity: [0, 1]
                },
                transition: {
                    duration: 0.4
                }
            }, navItems.map((item, index) => /*#__PURE__*/ React.createElement(EditableButton, {
                key: item,
                style: {
                    height: `${layoutObject.mobileDropDownItemH}px`
                },
                className: "flex justify-center items-center w-full px-6 py-3 text-black text-left whitespace-nowrap cursor-pointer hover:text-black/60 hover:transition-all duration-100 dark:text-white dark:hover:text-white/60",
                onClick: () => setMobileNavOpen(!isMobileNavOpen)
            }, /*#__PURE__*/ React.createElement(EditableText, {
                propKey: `navItems_${index}`
            }, item))), /*#__PURE__*/ React.createElement("div", {
                className: `${showButton ? "" : "hidden"} w-full h-full flex items-center justify-center overflow-hidden gap-5 px-5 my-4`
            }, secondaryButton && /*#__PURE__*/ React.createElement(EditableButton, {
                style: {
                    height: `${layoutObject.buttonH}px`
                },
                className: `BTN-SECONDARY overflow-hidden px-5 flex-1 w-fit group text-[${layoutObject.buttonFont}px] whitespace-nowrap font-normal text-black flex justify-center gap-2 items-center rounded-full hover:bg-black/5 hover:transition-all hover:duration-300`
            }, /*#__PURE__*/ React.createElement(EditableText, {
                className: `overflow-hidden text-ellipsis`,
                propKey: `secondaryButton_textAttr`
            }, secondaryButton.textAttr), /*#__PURE__*/ React.createElement(EditableIcon, {
                propKey: `secondaryButton_icon`,
                icon: secondaryButton.icon,
                iconLibrary: "FontAwesome",
                className: `text-sm text-black group-hover:translate-x-1 transition-all`
            })), primaryButton && /*#__PURE__*/ React.createElement(EditableButton, {
                style: {
                    height: `${layoutObject.buttonH}px`,
                    color: primaryButton.textColor ? primaryButton.textColor : "black"
                },
                className: `BTN-PRIMARY overflow-hidden px-5 flex-1 w-fit px-[${layoutObject.buttonPX}px] group text-[${layoutObject.buttonFont}px] whitespace-nowrap font-normal flex justify-center gap-2 items-center rounded-full bg-blue-500 hover:bg-blue-600 hover:transition-all hover:duration-300`
            }, /*#__PURE__*/ React.createElement(EditableText, {
                className: `overflow-hidden text-ellipsis`,
                propKey: `primaryButton_textAttr`
            }, primaryButton.textAttr), /*#__PURE__*/ React.createElement(EditableIcon, {
                propKey: `primaryButton_icon`,
                icon: primaryButton.icon,
                iconLibrary: "FontAwesome",
                style: {
                    color: primaryButton.textColor ? primaryButton.textColor : "black"
                },
                className: `text-sm group-hover:translate-x-1 transition-all`
            }))))) : null));
        }
        Navigation_1845986629060902913 = /*#__PURE__*/ React.createElement(ErrorBoundary, {
            key: "hMOw051M5K3x1Pbriddus"
        }, /*#__PURE__*/ React.createElement(Navigation_01, {
            "fixedTop": false,
            "logo": "https://cdn.wegic.ai/assets/onepage/thread/icon/f1e705c8-331e-4a12-aa52-a412c2d5e68d.jpg",
            "logoSize": 40,
            "siteTitle": "Depressedesign",
            "navItems": ["link=home&text=Home", "link=portfolio&text=Portfolio", "link=pricelist&text=Pricelist"],
            "showButton": true,
            "primaryButton": {
                "icon": "fa-solid fa-arrow-right",
                "textAttr": "link=https%3A%2F%2Fwa.me%2F085157332251%3Ftext%3DHallo%2520Depressedesign%21%2520i%2520need%2520design.&target=_blank&text=Contact%20us",
                "textColor": "#ffffff"
            },
            "secondaryButton": {
                "icon": "fa-solid fa-arrow-right",
                "textAttr": "link=https%3A%2F%2Fwww.instagram.com%2Fdepressedesign%2F&target=_blank&text=Follow%20us"
            },
            "version": 2,
            key: "hMOw051M5K3x1Pbriddus"
        }));
    } catch (error) {} {
        const list = []; {
            try {
                function Hero_38({
                    title = "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cb%3E%3Cspan%20style%3D%22font-size%3A28.0pt%3B%0Aline-height%3A107%25%22%3EHello%20%3C%2Fspan%3E%3C%2Fb%3E%3Cb%3E%3Cspan%20style%3D%22font-size%3A28.0pt%3Bline-height%3A%0A107%25%3Bfont-family%3A%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2Csans-serif%3Bmso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Emoji%26quot%3B%22%3E%F0%9F%91%8B%3C%2Fspan%3E%3C%2Fb%3E%3Cb%3E%3Cspan%20style%3D%22font-size%3A28.0pt%3Bline-height%3A107%25%22%3E%20%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fb%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%0A%0A%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cb%3E%3Cspan%20style%3D%22font-size%3A28.0pt%3B%0Aline-height%3A107%25%22%3EDepressedesign%20Here%21%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fb%3E%3C%2Fp%3E",
                    description = "link=&target=_blank&text=%3Cdiv%3E%3Cspan%20style%3D%22color%3A%20rgb%2871%2085%20105%20%2F%20var%28--tw-text-opacity%29%29%3B%20font-family%3A%20var%28--custom-body-font%29%3B%22%3E%22We%20breathe%20life%20into%20minimalist%20designs%2C%20creating%20elegant%20and%20impactful%20visuals%20that%20set%20your%20brand%20apart.%20By%20combining%20modern%20aesthetics%20with%20practical%20functionality%2C%20we%20help%20you%20build%20a%20brand%20that%27s%20unforgettable.%20Let%27s%20partner%20up%20and%20create%20something%20extraordinary.%22%3C%2Fspan%3E%3Cbr%3E%3C%2Fdiv%3E",
                    inspiration = {
                        "stat": "link=&target=_blank&text=",
                        "text": "link=https%3A%2F%2Fid.pinterest.com%2FPancaHan%2F&target=_blank&text=Design%20Inspirations"
                    },
                    collections = {
                        "stat": "link=&target=_blank&text=",
                        "text": "link=https%3A%2F%2Fwww.instagram.com%2Fdepressedesign%2F&target=_blank&text=Unique%20Collections"
                    },
                    creatives = {
                        "stat": "link=&target=_blank&text=",
                        "text": "link=https%3A%2F%2Fwww.tiktok.com%2F%40panca_han&target=_blank&text=Visionary%20Creatives"
                    },
                    heroImage = "https://cdn.wegic.ai/assets/onepage/img/6cb97d1a-ddfd-49af-83df-3f3a7525d4e1.jpg?args=q%3A85%2Frs%3Afit%3A898%3A898%2Fdpr%3A2%2Fsm%3A1",
                    primaryButton = {
                        "textAttr": "link=https%3A%2F%2Fdepressedesign.wegic.app%2Fpricelist&target=_self&text=PRICE%20LIST%26nbsp%3B"
                    },
                    secondaryButton = {
                        "textAttr": "link=https%3A%2F%2Fdepressedesign.wegic.app%2Fportfolio&target=_self&text=PORTFOLIO",
                        "icon": "fa-solid fa-arrow-right"
                    }
                }) {
                    return /*#__PURE__*/ React.createElement("section", {
                        className: "relative px-6 py-24 md:px-8 md:py-32",
                        "data-id": "XEJDQzUQVQTHAiXpAl149"
                    }, /*#__PURE__*/ React.createElement(AnimateInView, null, /*#__PURE__*/ React.createElement("div", {
                        className: "w-full max-w-7xl mx-auto grid grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-24"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "w-full flex flex-col gap-16 md:gap-20"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "w-full flex flex-col gap-6"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "title",
                        className: "TITLE-PRIMARY text-6xl font-bold text-slate-900 dark:text-slate-50"
                    }, title), /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "description",
                        className: "DESC text-slate-600 dark:text-slate-400"
                    }, description)), /*#__PURE__*/ React.createElement("div", {
                        className: "flex flex-col gap-10"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "w-full flex items-center gap-6"
                    }, /*#__PURE__*/ React.createElement(EditableButton, {
                        className: "BTN-PRIMARY w-fit text-white whitespace-nowrap px-4 py-3 rounded-full bg-sky-500 hover:bg-sky-600"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "primaryButton_textAttr"
                    }, primaryButton.textAttr)), /*#__PURE__*/ React.createElement(EditableButton, {
                        className: "BTN-SECONDARY w-fit flex items-center gap-1 group text-slate-900 dark:text-slate-50 whitespace-nowrap px-4 py-3 hover:text-sky-500 dark:hover:text-sky-600"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "secondaryButton_textAttr"
                    }, secondaryButton.textAttr), /*#__PURE__*/ React.createElement(EditableIcon, {
                        propKey: "secondaryButton_icon",
                        icon: secondaryButton.icon,
                        iconLibrary: "FontAwesome",
                        className: "group-hover:translate-x-1 transition-all duration-300"
                    }))), /*#__PURE__*/ React.createElement("div", {
                        className: "w-full flex items-center gap-6"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "flex flex-col gap-1"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "inspiration_stat",
                        className: "TEXT-CONTENT text-2xl font-extrabold text-slate-900 dark:text-slate-50"
                    }, inspiration.stat), /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "inspiration_text",
                        className: "TEXT-CONTENT text-slate-600 dark:text-slate-400"
                    }, inspiration.text)), /*#__PURE__*/ React.createElement("i", {
                        className: "fa-solid fa-chevron-right text-slate-300"
                    }), /*#__PURE__*/ React.createElement("div", {
                        className: "flex flex-col gap-1"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "collections_stat",
                        className: "TEXT-CONTENT text-2xl font-extrabold text-slate-900 dark:text-slate-50"
                    }, collections.stat), /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "collections_text",
                        className: "TEXT-CONTENT text-slate-600 dark:text-slate-400"
                    }, collections.text)), /*#__PURE__*/ React.createElement("i", {
                        className: "fa-solid fa-chevron-right text-slate-300"
                    }), /*#__PURE__*/ React.createElement("div", {
                        className: "flex flex-col gap-1"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "creatives_stat",
                        className: "TEXT-CONTENT text-2xl font-extrabold text-slate-900 dark:text-slate-50"
                    }, creatives.stat), /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "creatives_text",
                        className: "TEXT-CONTENT text-slate-600 dark:text-slate-400"
                    }, creatives.text))))), /*#__PURE__*/ React.createElement(EditableImg, {
                        isFCP: true,
                        isFCP: true,
                        propKey: "heroImage",
                        src: heroImage,
                        className: "IMAGE w-full h-auto aspect-[4/3] md:aspect-[1/1] object-cover rounded-[2rem] rounded-tl-[100px] rounded-br-[100px]"
                    })), /*#__PURE__*/ React.createElement("div", {
                        className: "absolute inset-0 rounded-bl-[100px] bg-slate-50 dark:bg-slate-900 pointer-events-none -z-10"
                    })));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "XEJDQzUQVQTHAiXpAl149"
                }, /*#__PURE__*/ React.createElement(Hero_38, {
                    "title": "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cb%3E%3Cspan%20style%3D%22font-size%3A28.0pt%3B%0Aline-height%3A107%25%22%3EHello%20%3C%2Fspan%3E%3C%2Fb%3E%3Cb%3E%3Cspan%20style%3D%22font-size%3A28.0pt%3Bline-height%3A%0A107%25%3Bfont-family%3A%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2Csans-serif%3Bmso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Emoji%26quot%3B%22%3E%F0%9F%91%8B%3C%2Fspan%3E%3C%2Fb%3E%3Cb%3E%3Cspan%20style%3D%22font-size%3A28.0pt%3Bline-height%3A107%25%22%3E%20%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fb%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%0A%0A%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cb%3E%3Cspan%20style%3D%22font-size%3A28.0pt%3B%0Aline-height%3A107%25%22%3EDepressedesign%20Here%21%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fb%3E%3C%2Fp%3E",
                    "description": "link=&target=_blank&text=%3Cdiv%3E%3Cspan%20style%3D%22color%3A%20rgb%2871%2085%20105%20%2F%20var%28--tw-text-opacity%29%29%3B%20font-family%3A%20var%28--custom-body-font%29%3B%22%3E%22We%20breathe%20life%20into%20minimalist%20designs%2C%20creating%20elegant%20and%20impactful%20visuals%20that%20set%20your%20brand%20apart.%20By%20combining%20modern%20aesthetics%20with%20practical%20functionality%2C%20we%20help%20you%20build%20a%20brand%20that%27s%20unforgettable.%20Let%27s%20partner%20up%20and%20create%20something%20extraordinary.%22%3C%2Fspan%3E%3Cbr%3E%3C%2Fdiv%3E",
                    "inspiration": {
                        "stat": "link=&target=_blank&text=",
                        "text": "link=https%3A%2F%2Fid.pinterest.com%2FPancaHan%2F&target=_blank&text=Design%20Inspirations"
                    },
                    "collections": {
                        "stat": "link=&target=_blank&text=",
                        "text": "link=https%3A%2F%2Fwww.instagram.com%2Fdepressedesign%2F&target=_blank&text=Unique%20Collections"
                    },
                    "creatives": {
                        "stat": "link=&target=_blank&text=",
                        "text": "link=https%3A%2F%2Fwww.tiktok.com%2F%40panca_han&target=_blank&text=Visionary%20Creatives"
                    },
                    "heroImage": "https://cdn.wegic.ai/assets/onepage/img/6cb97d1a-ddfd-49af-83df-3f3a7525d4e1.jpg?args=q%3A85%2Frs%3Afit%3A898%3A898%2Fdpr%3A2%2Fsm%3A1",
                    "primaryButton": {
                        "textAttr": "link=https%3A%2F%2Fdepressedesign.wegic.app%2Fpricelist&target=_self&text=PRICE%20LIST%26nbsp%3B"
                    },
                    "secondaryButton": {
                        "textAttr": "link=https%3A%2F%2Fdepressedesign.wegic.app%2Fportfolio&target=_self&text=PORTFOLIO",
                        "icon": "fa-solid fa-arrow-right"
                    },
                    key: "XEJDQzUQVQTHAiXpAl149"
                })));
            } catch (error) {}
        } {
            try {
                function Feature_11({
                    title = "Innovative Design Solutions",
                    subTitle = "Enhance Your Brand's Presence",
                    description = "Discover how our cutting-edge design solutions can elevate your brand's visual identity and engage your audience.",
                    features = [{
                        name: "Creative Branding",
                        description: "Craft a unique brand identity with our creative branding strategies and visually compelling designs.",
                        icon: "fa-solid fa-palette"
                    }, {
                        name: "Responsive Web Design",
                        description: "Build responsive, mobile-first websites that provide seamless experiences across all devices.",
                        icon: "fa-solid fa-laptop-code"
                    }, {
                        name: "Interactive User Experience",
                        description: "Engage your audience with interactive and user-friendly designs that drive user satisfaction and conversions.",
                        icon: "fa-solid fa-users"
                    }],
                    imageUrl = "https://source.unsplash.com/random/2832x1842/?studio,design"
                }) {
                    return /*#__PURE__*/ React.createElement("div", {
                        className: "overflow-hidden bg-white py-24 sm:py-32 dark:bg-slate-800",
                        "data-id": "ik_BlEN-f0mb0GaXjq3AI"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "mx-auto max-w-7xl px-6 lg:px-8"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "mx-auto grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "lg:pr-8"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "lg:max-w-lg"
                    }, /*#__PURE__*/ React.createElement("h2", {
                        className: "TITLE-PRIMARY text-base font-semibold leading-7 text-sky-600 dark:text-white/80"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "title"
                    }, title)), /*#__PURE__*/ React.createElement("p", {
                        className: "TITLE-SECONDARY mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white/80"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "subTitle"
                    }, subTitle)), /*#__PURE__*/ React.createElement("p", {
                        className: "DESC mt-6 text-lg leading-8 text-gray-600 dark:text-white/80"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "description"
                    }, description)), /*#__PURE__*/ React.createElement("dl", {
                        className: "mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none dark:text-white/80"
                    }, features.map((feature, index) => /*#__PURE__*/ React.createElement("div", {
                        key: feature.name,
                        className: "relative pl-9"
                    }, /*#__PURE__*/ React.createElement("dt", {
                        className: "inline font-semibold text-gray-900 dark:text-white/80"
                    }, /*#__PURE__*/ React.createElement(EditableIcon, {
                        propKey: `features_${index}_icon`,
                        icon: feature.icon,
                        iconLibrary: "FontAwesome",
                        className: "absolute left-1 top-1 text-base text-sky-600 dark:text-white/80",
                        "aria-hidden": "true"
                    }), /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `features_${index}_name`
                    }, feature.name)), /*#__PURE__*/ React.createElement("dd", {
                        className: "inline TEXT-CONTENT"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `features_${index}_description`
                    }, feature.description))))))), /*#__PURE__*/ React.createElement(EditableImg, {
                        propKey: "imageUrl",
                        className: "IMAGE w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-black/10 dark:ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 aspect-video object-cover",
                        src: imageUrl,
                        alt: imageUrl
                    }))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "ik_BlEN-f0mb0GaXjq3AI"
                }, /*#__PURE__*/ React.createElement(Feature_11, {
                    "title": "Exceptional Design Features",
                    "subTitle": "Elevate Your Brand",
                    "description": "Our innovative design solutions are crafted to enhance your brand's visual identity and captivate your audience.",
                    "features": [{
                        "name": "Creative Branding",
                        "description": "Develop a distinctive brand identity with our strategic and visually compelling designs.",
                        "icon": "fa-solid fa-palette"
                    }, {
                        "name": "link=&target=_blank&text=Visual%20Identity",
                        "description": "link=&target=_blank&text=Updating%20your%20logo%2C%20color%20palette%2C%20and%20typography%20to%20create%20a%20more%20cohesive%20and%20memorable%20brand.",
                        "icon": "icon=fa-brands%20fa-slack&link=&target=_blank"
                    }, {
                        "name": "link=&target=_blank&text=Brand%20storytelling",
                        "description": "link=&target=_blank&text=Developing%20compelling%20narratives%20to%20connect%20with%20your%20audience%20on%20a%20deeper%20level.",
                        "icon": "fa-solid fa-users"
                    }],
                    "imageUrl": "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHNlYXJjaHw3MHx8UG9ydGZvbGlvJTJDUHJpY2VsaXN0JTJDRGVzaWdufGVufDB8fHx8MTcyODk3MTY1M3ww&ixlib=rb-4.0.3&q=80&w=1080",
                    key: "ik_BlEN-f0mb0GaXjq3AI"
                })));
            } catch (error) {}
        } {
            try {
                function Gallery_01({
                    title = "link=&target=_blank&text=&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Logo Design",
                    description = "link=&target=_blank&text=&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Explore our collection of high-quality design pieces, showcasing our commitment to excellence.",
                    images = [{
                        "url": "https://cdn.wegic.ai/assets/onepage/img/cdda7e93-fca7-4b91-bbb0-30b6a78fec78.jpg?args=q%3A85%2Frs%3Afit%3A304%3A406%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text=",
                        "category": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/a1a17930-e5db-411b-af53-df1925e79da2.jpg?args=q%3A85%2Frs%3Afit%3A304%3A406%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text=",
                        "category": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/e176631a-31d7-4583-84be-65a65b07a3ab.jpg?args=q%3A85%2Frs%3Afit%3A304%3A406%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text=",
                        "category": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/c3831a91-b5b3-4f70-b201-1c718ae030be.jpg?args=q%3A85%2Frs%3Afit%3A304%3A406%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text=",
                        "category": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/4990da40-53fd-4db0-a144-b992db37b334.jpg?args=q%3A85%2Frs%3Afit%3A304%3A406%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text=",
                        "category": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/3ca173ab-1e23-4398-8a07-c67d5592c9b1.jpg?args=q%3A85%2Frs%3Afit%3A304%3A406%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text=",
                        "category": "link=&target=_blank&text="
                    }, {
                        "url": "https://source.unsplash.com/700x800/?virtual,reality",
                        "name": "Virtual Reality Showcase",
                        "category": "link=&target=_blank&text=Virtual Reality"
                    }, {
                        "url": "https://source.unsplash.com/700x800/?sustainable,energy",
                        "name": "Sustainable Design",
                        "category": "link=&target=_blank&text=Sustainability"
                    }, {
                        "url": "https://source.unsplash.com/700x800/?artificial,intelligence",
                        "name": "AI Innovations",
                        "category": "link=&target=_blank&text=Artificial Intelligence"
                    }, {
                        "url": "https://source.unsplash.com/700x800/?cybersecurity",
                        "name": "Cybersecurity Designs",
                        "category": "link=&target=_blank&text=Cybersecurity"
                    }]
                }) {
                    return /*#__PURE__*/ React.createElement("section", {
                        className: "py-10 bg-white dark:bg-slate-800 sm:py-10 lg:py-10",
                        "data-id": "AKRg786eqIFpgY81EoIWk"
                    }, /*#__PURE__*/ React.createElement(AnimateInView, {
                        type: "rise"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "lg:flex lg:items-end lg:justify-between"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "max-w-md mx-auto text-center lg:text-left lg:mx-0"
                    }, /*#__PURE__*/ React.createElement("h2", {
                        className: "TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white/90"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "title"
                    }, title)), /*#__PURE__*/ React.createElement("p", {
                        className: "DESC mt-6 text-base font-medium text-slate-900 dark:text-white/80"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "description"
                    }, description))))), /*#__PURE__*/ React.createElement("div", {
                        className: "flex w-full gap-6 pb-2 mt-12 overflow-x-auto sm:mt-16 snap-x"
                    }, images.map((image, index) => /*#__PURE__*/ React.createElement("div", {
                        key: index,
                        className: "relative overflow-hidden snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6"
                    }, /*#__PURE__*/ React.createElement(EditableImg, {
                        propKey: `images_${index}_url`,
                        className: "IMAGE w-[18.75rem] h-[25rem] aspect-[3/4] object-cover rounded-lg bg-slate-100",
                        src: image.url,
                        alt: image.name
                    }), /*#__PURE__*/ React.createElement("p", {
                        className: "TEXT-CONTENT mt-5 text-base font-bold text-slate-700 dark:text-white/80"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `images_${index}_name`
                    }, image.name)))))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "AKRg786eqIFpgY81EoIWk"
                }, /*#__PURE__*/ React.createElement(Gallery_01, {
                    "title": "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%3E%3Cspan%20style%3D%22font-size%3A36.0pt%3Bline-height%3A107%25%3Bfont-family%3A%0AMontserrat%3Bmso-bidi-font-family%3A%26quot%3BCalibri%20Light%26quot%3B%3Bmso-bidi-theme-font%3Amajor-latin%22%3ELogo%20Design%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E",
                    "description": "link=&target=_blank&text=&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Explore our collection of high-quality design pieces, showcasing our commitment to excellence.",
                    "images": [{
                        "url": "https://cdn.wegic.ai/assets/onepage/img/cdda7e93-fca7-4b91-bbb0-30b6a78fec78.jpg?args=q%3A85%2Frs%3Afit%3A304%3A406%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text=",
                        "category": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/a1a17930-e5db-411b-af53-df1925e79da2.jpg?args=q%3A85%2Frs%3Afit%3A304%3A406%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text=",
                        "category": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/e176631a-31d7-4583-84be-65a65b07a3ab.jpg?args=q%3A85%2Frs%3Afit%3A304%3A406%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text=",
                        "category": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/c3831a91-b5b3-4f70-b201-1c718ae030be.jpg?args=q%3A85%2Frs%3Afit%3A304%3A406%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text=",
                        "category": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/4990da40-53fd-4db0-a144-b992db37b334.jpg?args=q%3A85%2Frs%3Afit%3A304%3A406%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text=",
                        "category": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/3ca173ab-1e23-4398-8a07-c67d5592c9b1.jpg?args=q%3A85%2Frs%3Afit%3A304%3A406%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text=",
                        "category": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/2744b195-a680-42fc-aa97-6a98f920250b.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text=",
                        "category": "link=&target=_blank&text=Virtual Reality"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/da64bc5d-51b2-4ee9-b78f-31e9bb426339.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text=",
                        "category": "link=&target=_blank&text=Sustainability"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/0c451d16-32e6-48ee-9165-24f6c9d398f9.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text=",
                        "category": "link=&target=_blank&text=Artificial Intelligence"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/40810577-fba5-415d-8c97-7983b4075cf7.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text=",
                        "category": "link=&target=_blank&text=Cybersecurity"
                    }],
                    key: "AKRg786eqIFpgY81EoIWk"
                })));
            } catch (error) {}
        } {
            try {
                function Testimonial_06({
                    title = `Trusted by Design Studios Worldwide`,
                    description = `Our commitment to excellence is reflected in the trust and satisfaction of our clients.`,
                    testimonials = [{
                        name: `Jordan Singer`,
                        role: `UI/UX Designer`,
                        imageUrl: `https://source.unsplash.com/700x900/?portrait,designer`,
                        iconPlay: `fa-solid fa-play`
                    }, {
                        name: `Avery Stewart`,
                        role: `Creative Director`,
                        imageUrl: `https://source.unsplash.com/700x900/?portrait,creative`,
                        iconPlay: `fa-solid fa-play`
                    }, {
                        name: `Riley Jones`,
                        role: `Brand Strategist`,
                        imageUrl: `https://source.unsplash.com/700x900/?portrait,strategist`,
                        iconPlay: `fa-solid fa-play`
                    }],
                    iconArrow = `fa-solid fa-arrow-right`,
                    allReviewsTextAttr = `text=See all reviews by our customers&link=/`
                }) {
                    return /*#__PURE__*/ React.createElement("section", {
                        className: "py-10 bg-slate-50 dark:bg-slate-800",
                        "data-id": "x-nfAYnLvEq-5fKwP4Tr0"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "mx-auto px-4 py-10 max-w-7xl flex flex-col gap-20 items-center"
                    }, /*#__PURE__*/ React.createElement(AnimateInView, {
                        type: "rise"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "mx-auto text-center max-w-2xl flex flex-col gap-6"
                    }, /*#__PURE__*/ React.createElement("h2", {
                        className: "TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-white"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "title"
                    }, title)), /*#__PURE__*/ React.createElement("p", {
                        className: "DESC text-base font-normal text-slate-600 dark:text-white/70"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "description"
                    }, description)))), /*#__PURE__*/ React.createElement("div", {
                        className: "grid grid-cols-1 gap-6 md:grid-cols-3"
                    }, testimonials.map((testimonial, index) => /*#__PURE__*/ React.createElement(AnimateInView, {
                        key: index,
                        type: "rise"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "relative overflow-hidden group rounded-2xl"
                    }, /*#__PURE__*/ React.createElement(EditableImg, {
                        propKey: `testimonials_${index}_imageUrl`,
                        className: "IMAGE object-cover w-full h-auto aspect-[4/3] md:aspect-[3/4] transition-all duration-200 group-hover:scale-110",
                        src: testimonial.imageUrl,
                        alt: testimonial.imageUrl
                    }), /*#__PURE__*/ React.createElement("div", {
                        className: "absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"
                    }), /*#__PURE__*/ React.createElement("div", {
                        className: "absolute bottom-0 left-0 w-full px-6 py-5"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "flex items-center justify-between"
                    }, /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("p", {
                        className: "TEXT-CONTENT text-base font-semibold text-white"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `testimonials_${index}_name`
                    }, testimonial.name)), /*#__PURE__*/ React.createElement("p", {
                        className: "DESC mt-1 text-sm font-normal text-white/70"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `testimonials_${index}_role`
                    }, testimonial.role))), /*#__PURE__*/ React.createElement(EditableButton, {
                        className: "BTN-PRIMARY inline-flex items-center justify-center h-14 w-14 text-white bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl hover:bg-white/20 transition-all duration-200 pointer-events-auto"
                    }, /*#__PURE__*/ React.createElement(EditableIcon, {
                        propKey: `testimonials_${index}_iconPlay`,
                        icon: testimonial.iconPlay,
                        iconLibrary: "FontAwesome",
                        className: "text-xl text-white"
                    })))))))), /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement(EditableButton, {
                        className: "BTN-SECONDARY inline-flex group items-center gap-2 text-base font-semibold text-sky-500 hover:text-sky-400 dark:hover:text-sky-400 transition-all duration-200 group"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "allReviewsTextAttr"
                    }, allReviewsTextAttr), /*#__PURE__*/ React.createElement(EditableIcon, {
                        propKey: "iconArrow",
                        icon: iconArrow,
                        iconLibrary: "FontAwesome",
                        className: " text-sky-500 group-hover:translate-x-1 transition-all duration-200 group-hover:text-sky-400 dark:group-hover:text-sky-400"
                    })))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "x-nfAYnLvEq-5fKwP4Tr0"
                }, /*#__PURE__*/ React.createElement(Testimonial_06, {
                    "title": "link=&target=_blank&text=Streetwear%20Design",
                    "description": "link=&target=_blank&text=streetwear%20brand%20that%20incorporates%20elements%20of%20%3Cstrong%3Edark%20aesthetics%3C%2Fstrong%3E%2C%20%3Cstrong%3Eemotional%20expression%3C%2Fstrong%3E%2C%20and%20%3Cstrong%3Ealternative%20culture%3C%2Fstrong%3E.",
                    "testimonials": [{
                        "name": "link=&target=_blank&text=GGUM",
                        "role": "link=&target=_blank&text=K-POP%20TSHIRT",
                        "imageUrl": "https://cdn.wegic.ai/assets/onepage/img/bd8b1d1f-57cf-43a0-ab57-9f6c9fcebff3.jpg?args=q%3A85%2Frs%3Afit%3A652%3A868%2Fdpr%3A2%2Fsm%3A1",
                        "iconPlay": "icon=fa-solid%20fa-heart&link=https%3A%2F%2Fid.pinterest.com%2Fpin%2F711357703675959202%2F&target=_blank"
                    }, {
                        "name": "link=&target=_blank&text=SYNS",
                        "role": "link=&target=_blank&text=GRUNGE%20TSHIRT",
                        "imageUrl": "https://cdn.wegic.ai/assets/onepage/img/bcde5f97-e520-4422-a895-3d99bf61b51d.jpg?args=q%3A85%2Frs%3Afit%3A652%3A868%2Fdpr%3A2%2Fsm%3A1",
                        "iconPlay": "icon=fa-solid%20fa-heart&link=https%3A%2F%2Fid.pinterest.com%2Fpin%2F711357703672767477%2F&target=_blank"
                    }, {
                        "name": "link=&target=_blank&text=%3Cspan%20lang%3D%22FR%22%20style%3D%22font-size%3A11.0pt%3Bline-height%3A%0A107%25%3Bfont-family%3A%26quot%3BCalibri%26quot%3B%2Csans-serif%3Bmso-ascii-theme-font%3Aminor-latin%3B%0Amso-fareast-font-family%3ACalibri%3Bmso-fareast-theme-font%3Aminor-latin%3Bmso-hansi-theme-font%3A%0Aminor-latin%3Bmso-bidi-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-bidi-theme-font%3Aminor-bidi%3B%0Amso-ansi-language%3AFR%3Bmso-fareast-language%3AEN-US%3Bmso-bidi-language%3AAR-SA%22%3EHAPPY%0ATOGETHER%26nbsp%3B%3C%2Fspan%3E",
                        "role": "link=&target=_blank&text=Y2K%20THRESHOLD",
                        "imageUrl": "https://cdn.wegic.ai/assets/onepage/img/739775d6-3494-4a3d-803a-51d013db51d9.jpg?args=q%3A85%2Frs%3Afit%3A652%3A868%2Fdpr%3A2%2Fsm%3A1",
                        "iconPlay": "icon=fa-solid%20fa-heart&link=https%3A%2F%2Fid.pinterest.com%2Fpin%2F711357703672065574%2F&target=_blank"
                    }],
                    "iconArrow": "fa-solid fa-arrow-right",
                    "allReviewsTextAttr": "link=%2Fportfolio&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%3E%3Cb%3E%3Cu%3E%3Cspan%20style%3D%22font-size%3A14.0pt%3Bline-height%3A107%25%3B%0Afont-family%3AMontserrat%22%3EExplore%20Portfolio%3C%2Fspan%3E%3C%2Fu%3E%3C%2Fb%3E%3Cu%3E%3Cspan%20style%3D%22font-size%3A14.0pt%3Bline-height%3A107%25%3Bfont-family%3AMontserrat%22%3E%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fu%3E%3C%2Fp%3E",
                    key: "x-nfAYnLvEq-5fKwP4Tr0"
                })));
            } catch (error) {}
        } {
            try {
                function Testimonial_04({
                    imageUrl = `https://source.unsplash.com/1200x1200/?portrait`,
                    logo = `fa-solid fa-wand-magic-sparkles`,
                    logoName = `Design Studio`,
                    testimonial1 = `The design studio's work was impeccable, and their attention to detail was outstanding. Their creative vision brought our project to life.`,
                    testimonial2 = `Working with the studio was a breeze; they understood our needs and delivered exceptional designs that elevated our brand.`,
                    authorName = `Leslie Alexander, Product Designer at Crowny`
                }) {
                    return /*#__PURE__*/ React.createElement("section", {
                        className: "bg-white dark:bg-slate-800 py-10",
                        "data-id": "5IidrDv76abRDmxQTXpxB"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "max-w-7xl mx-auto px-4 py-10 flex flex-col-reverse items-center gap-16 md:flex-row "
                    }, /*#__PURE__*/ React.createElement(AnimateInView, {
                        type: "rise"
                    }, /*#__PURE__*/ React.createElement(EditableImg, {
                        propKey: "imageUrl",
                        className: "IMAGE rounded-lg bg-slate-100 w-full h-auto aspect-[4/3] md:aspect-[3/4] object-cover",
                        src: imageUrl,
                        alt: imageUrl
                    })), /*#__PURE__*/ React.createElement(AnimateInView, {
                        type: "rise"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "flex flex-col gap-12"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "flex items-center gap-4"
                    }, /*#__PURE__*/ React.createElement(EditableIcon, {
                        propKey: "logo",
                        icon: logo,
                        iconLibrary: "FontAwesome",
                        className: "text-slate-900 dark:text-white"
                    }), /*#__PURE__*/ React.createElement("h2", {
                        className: "TITLE-PRIMARY text-3xl font-semibold text-slate-900 dark:text-white"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "logoName"
                    }, logoName))), /*#__PURE__*/ React.createElement("div", {
                        className: "flex flex-col gap-8"
                    }, /*#__PURE__*/ React.createElement("p", {
                        className: "DESC text-xl font-medium text-slate-900 dark:text-white/90"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "testimonial1"
                    }, testimonial1)), /*#__PURE__*/ React.createElement("p", {
                        className: "DESC text-lg text-slate-700 dark:text-white/90"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "testimonial2"
                    }, testimonial2)), /*#__PURE__*/ React.createElement("p", {
                        className: "DESC text-base font-semibold text-slate-500 dark:text-white/50"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "authorName"
                    }, authorName)))))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "5IidrDv76abRDmxQTXpxB"
                }, /*#__PURE__*/ React.createElement(Testimonial_04, {
                    "imageUrl": "https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHNlYXJjaHw0OXx8b2ZmaWNlfGVufDB8fHx8MTcyODk1Njc2OHww&ixlib=rb-4.0.3&q=80&w=1080",
                    "logo": "icon=fa-solid%20fa-bolt&link=&target=_blank",
                    "logoName": "Depressedesign Studio",
                    "testimonial1": "Depressedesign transformed our vision into reality with their unparalleled attention to detail and creativity.",
                    "testimonial2": "Collaborating with Depressedesign was seamless; they delivered designs that exceeded our expectations.",
                    "authorName": "link=&target=_blank&text=",
                    key: "5IidrDv76abRDmxQTXpxB"
                })));
            } catch (error) {}
        } {
            function _extends() {
                _extends = Object.assign ? Object.assign.bind() : function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                    return target;
                };
                return _extends.apply(this, arguments);
            }
            try {
                function Contact_06({
                    title = 'Connect with Art Journey',
                    description = 'We\'re here to discuss your artistic visions and collaborate on your creative journey. Let\'s bring your ideas to life with our artistic expertise.',
                    formProps = [{}],
                    departments = [{
                        title: 'Collaborate',
                        address: '123 Rue de Parfum, Paris, France',
                        email: 'paris@zz.com'
                    }, {
                        title: 'Press',
                        address: '456 Madison Ave, New York, USA',
                        email: 'ny@zz.com'
                    }, {
                        title: 'Careers',
                        address: '789 Ginza St, Tokyo, Japan',
                        email: 'tokyo@zz.com'
                    }, {
                        title: 'General Inquiry',
                        address: '789 Ginza St, Tokyo, Japan',
                        email: 'tokyo@zz.com'
                    }]
                }) {
                    return /*#__PURE__*/ React.createElement("section", {
                        className: "relative w-full bg-white dark:bg-black",
                        "data-id": "ZxSZyV5RmmejET8NCPXH7"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "grid md:grid-cols-2 gap-8 mb-16"
                    }, /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", {
                        className: "text-3xl font-bold mb-4"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "title"
                    }, title)), /*#__PURE__*/ React.createElement("p", {
                        className: "text-gray-500 mb-6"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "description"
                    }, description)), /*#__PURE__*/ React.createElement("div", {
                        className: "relative rounded-lg overflow-hidden"
                    }, /*#__PURE__*/ React.createElement(EditableForm, _extends({
                        propKey: "formProps_0"
                    }, formProps[0])))), /*#__PURE__*/ React.createElement("div", {
                        className: "space-y-12 px-20"
                    }, departments.map((dept, index) => /*#__PURE__*/ React.createElement("div", {
                        key: index
                    }, /*#__PURE__*/ React.createElement("h2", {
                        className: "text-xl font-bold mb-4"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `departments_${index}_title`
                    }, dept.title)), /*#__PURE__*/ React.createElement("div", {
                        className: "flex items-start space-x-2"
                    }, /*#__PURE__*/ React.createElement(EditableIcon, {
                        propKey: "locationIcon",
                        icon: "fa-map-marker-alt",
                        iconLibrary: "FontAwesome",
                        className: "mt-1 text-gray-500"
                    }), /*#__PURE__*/ React.createElement("p", {
                        className: "text-gray-700"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `departments_${index}_address`
                    }, dept.address))), /*#__PURE__*/ React.createElement("div", {
                        className: "flex items-start space-x-2 mt-2"
                    }, /*#__PURE__*/ React.createElement(EditableIcon, {
                        propKey: "emailIcon",
                        icon: "fa-envelope",
                        iconLibrary: "FontAwesome",
                        className: "mt-1 text-gray-500"
                    }), /*#__PURE__*/ React.createElement("p", {
                        className: "text-gray-700"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `departments_${index}_email`
                    }, dept.email)))))))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "ZxSZyV5RmmejET8NCPXH7"
                }, /*#__PURE__*/ React.createElement(Contact_06, {
                    "title": "Connect with Depressedesign",
                    "description": "We're here to discuss your design visions and collaborate on your creative journey. Let us bring your ideas to life with our design expertise.",
                    "formProps": [{
                        "id": "1949695601439342594"
                    }],
                    "departments": [{
                        "title": "Collaborate",
                        "address": "Monday-Friday, 9:00 am to 6:00 pm",
                        "email": "link=%2B62851-5733-2251&linkType=tel&text=%2B62851-5733-2251",
                        "icon": "icon=fa fa-solid fa-envelope&link=https://wa.me/085157332251?text=Hallo%20Depressedesign!%20i%20need%20design.&target=_blank"
                    }, {
                        "title": "Press",
                        "address": "Contact us at depressedesign@gmail.com",
                        "email": "link=&target=_blank&text=depressedesign@gmail.com",
                        "icon": "icon=fa fa-solid fa-envelope&link=&target=_blank"
                    }, {
                        "title": "Careers",
                        "address": "Explore opportunities with us to grow your design career.",
                        "email": "link=depressedesign%40gmail.com&linkType=email&text=depressedesign%40gmail.com",
                        "icon": "icon=fa fa-solid fa-briefcase&link=&target=_blank"
                    }, {
                        "title": "General Inquiry",
                        "address": "Feel free to reach out for any questions or inquiries.",
                        "email": "link=depressedesign%40gmail.com&linkType=email&text=depressedesign%40gmail.com",
                        "icon": "icon=fa fa-solid fa-info-circle&link=&target=_blank"
                    }],
                    "imageUrl": "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHNlYXJjaHw4fHxvZmZpY2UlMjB8ZW58MHx8fHwxNzI4OTU2OTQ2fDA&ixlib=rb-4.0.3&q=80&w=1080",
                    key: "ZxSZyV5RmmejET8NCPXH7"
                })));
            } catch (error) {}
        }
        routerList.push({
            path: "home",
            element: /*#__PURE__*/ React.createElement(Layout, null, list)
        });
    } {
        const list = []; {
            try {
                function Header_02({
                    title = "Design Studio - Create, Innovate, Inspire",
                    description = "At our design studio, we transform visions into reality. Our dedicated team ensures every project is a masterpiece."
                }) {
                    return /*#__PURE__*/ React.createElement("div", {
                        className: "bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-slate-800",
                        "data-id": "9I8pprzWSYyiJjfmKgDGc"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "mx-auto max-w-2xl text-center"
                    }, /*#__PURE__*/ React.createElement("h2", {
                        className: "TITLE-PRIMARY text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white/90"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `title`
                    }, title)), /*#__PURE__*/ React.createElement("p", {
                        className: "DESC mt-6 text-lg leading-8 text-slate-700 dark:text-white/90"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `description`
                    }, description))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "9I8pprzWSYyiJjfmKgDGc"
                }, /*#__PURE__*/ React.createElement(Header_02, {
                    "title": "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%3E%3Cb%3E%3Cspan%20style%3D%22font-size%3A33.0pt%3Bline-height%3A107%25%3B%0Afont-family%3A%26quot%3BCalibri%26quot%3B%2Csans-serif%3Bmso-ascii-theme-font%3Aminor-latin%3Bmso-fareast-font-family%3A%0ACalibri%3Bmso-fareast-theme-font%3Aminor-latin%3Bmso-hansi-theme-font%3Aminor-latin%3B%0Amso-bidi-theme-font%3Aminor-latin%3Bmso-ansi-language%3AEN-ID%3Bmso-fareast-language%3A%0AEN-US%3Bmso-bidi-language%3AAR-SA%22%3EDepressedesign%3C%2Fspan%3E%3C%2Fb%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%3E%3Cb%20style%3D%22color%3A%20rgb%2815%2023%2042%20%2F%20var%28--tw-text-opacity%29%29%3B%20font-family%3A%20var%28--custom-heading-font%29%3B%20letter-spacing%3A%20-0.025em%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%22%3E%3Cspan%20style%3D%22font-size%3A%2026pt%3B%20line-height%3A%20107%25%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22font-size%3A%2026pt%3B%20line-height%3A%20107%25%3B%20font-family%3A%20Calibri%2C%20sans-serif%3B%22%3E%26nbsp%3B%3C%2Fspan%3E%3Cspan%20style%3D%22line-height%3A%20107%25%3B%20font-family%3A%20Calibri%2C%20sans-serif%3B%20font-size%3A%2044px%3B%22%3EPortfolio%3C%2Fspan%3E%3C%2Fb%3E%3Cb%20style%3D%22color%3A%20rgb%2815%2023%2042%20%2F%20var%28--tw-text-opacity%29%29%3B%20font-family%3A%20var%28--custom-heading-font%29%3B%20font-size%3A%202.25rem%3B%20letter-spacing%3A%20-0.025em%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%22%3E%3Cspan%20style%3D%22font-size%3A26.0pt%3Bline-height%3A%0A107%25%3Bfont-family%3A%26quot%3BCalibri%26quot%3B%2Csans-serif%3Bmso-ascii-theme-font%3Aminor-latin%3B%0Amso-fareast-font-family%3ACalibri%3Bmso-fareast-theme-font%3Aminor-latin%3Bmso-hansi-theme-font%3A%0Aminor-latin%3Bmso-bidi-theme-font%3Aminor-latin%3Bmso-ansi-language%3AEN-ID%3Bmso-fareast-language%3A%0AEN-US%3Bmso-bidi-language%3AAR-SA%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fb%3E%3Cspan%20style%3D%22color%3A%20rgb%2815%2023%2042%20%2F%20var%28--tw-text-opacity%29%29%3B%20letter-spacing%3A%20-0.9px%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%20font-size%3A%2026pt%3B%20font-weight%3A%20bolder%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cb%20style%3D%22color%3A%20rgb%2815%2023%2042%20%2F%20var%28--tw-text-opacity%29%29%3B%20font-family%3A%20var%28--custom-heading-font%29%3B%20font-size%3A%202.25rem%3B%20letter-spacing%3A%20-0.025em%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%22%3E%3Cspan%20style%3D%22font-size%3A26.0pt%3Bline-height%3A%0A107%25%3Bfont-family%3A%26quot%3BCalibri%26quot%3B%2Csans-serif%3Bmso-ascii-theme-font%3Aminor-latin%3B%0Amso-fareast-font-family%3ACalibri%3Bmso-fareast-theme-font%3Aminor-latin%3Bmso-hansi-theme-font%3A%0Aminor-latin%3Bmso-bidi-theme-font%3Aminor-latin%3Bmso-ansi-language%3AEN-ID%3Bmso-fareast-language%3A%0AEN-US%3Bmso-bidi-language%3AAR-SA%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fb%3E%3C%2Fp%3E",
                    "description": "Explore the essence of minimalism and elegance through our curated design projects. Each piece reflects our commitment to high-quality and innovative design.",
                    key: "9I8pprzWSYyiJjfmKgDGc"
                })));
            } catch (error) {}
        } {
            try {
                function Gallery_01({
                    title = "link=&target=_blank&text=Showcase%20of%20High%20Quality%20Designer%20Work",
                    description = "Discover the elegance of minimalist design through our curated portfolio. Each piece reflects the creativity and precision of top designers.",
                    images = [{
                        "url": "https://cdn.wegic.ai/assets/onepage/img/f5036ad3-e983-4e0a-8925-22acab3ccecf.jpg?args=q%3A85%2Frs%3Afit%3A662%3A496%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Minimalist Elegance"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/b68cdf4a-e568-4cdc-be70-0de0186ba5f7.jpg?args=q%3A85%2Frs%3Afit%3A662%3A496%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Artistic Precision"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/165f25e8-c03b-4d00-bb49-337216ef65b3.jpg?args=q%3A85%2Frs%3Afit%3A662%3A496%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Innovative Craftsmanship"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/cda221ef-c82d-475a-8807-256840c198f1.jpg?args=q%3A85%2Frs%3Afit%3A662%3A496%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Seamless Artistry"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/49b95937-96b2-4d20-a749-e90c50131e0e.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Creative Vision"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/d70d433f-a6e7-445e-b93e-e390a3bb94cb.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Functional Design"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/eb1cca39-b9d9-440b-b790-8264d9abdea0.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Artistic Innovation"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/6194119b-523e-45b5-b221-9ca9d17d582b.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Portfolio Excellence"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/3425b45d-9917-45af-8d88-846a760ab8f2.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Design Mastery"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/df01c687-62bd-463c-9f07-ef0382493a8d.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Crafted Innovation"
                    }]
                }) {
                    return /*#__PURE__*/ React.createElement("section", {
                        className: "py-10 bg-white dark:bg-slate-800 sm:py-10 lg:py-10",
                        "data-id": "KrbG2GRrMCdQDW74DK3f2"
                    }, /*#__PURE__*/ React.createElement(AnimateInView, {
                        type: "rise"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "lg:flex lg:items-end lg:justify-between"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "max-w-md mx-auto text-center lg:text-left lg:mx-0"
                    }, /*#__PURE__*/ React.createElement("h2", {
                        className: "TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white/90"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "title"
                    }, title)), /*#__PURE__*/ React.createElement("p", {
                        className: "DESC mt-6 text-base font-medium text-slate-900 dark:text-white/80"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "description"
                    }, description))))), /*#__PURE__*/ React.createElement("div", {
                        className: "flex w-full gap-6 pb-2 mt-12 overflow-x-auto sm:mt-16 snap-x"
                    }, images.map((image, index) => /*#__PURE__*/ React.createElement("div", {
                        key: index,
                        className: "relative overflow-hidden snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6"
                    }, /*#__PURE__*/ React.createElement(EditableImg, {
                        propKey: `images_${index}_url`,
                        className: "IMAGE w-[18.75rem] h-[25rem] aspect-[3/4] object-cover rounded-lg bg-slate-100",
                        src: image.url,
                        alt: image.name
                    }), /*#__PURE__*/ React.createElement("p", {
                        className: "TEXT-CONTENT mt-5 text-base font-bold text-slate-700 dark:text-white/80"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `images_${index}_name`
                    }, image.name)))))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "KrbG2GRrMCdQDW74DK3f2"
                }, /*#__PURE__*/ React.createElement(Gallery_01, {
                    "title": "link=&target=_blank&text=Showcase%20of%20High%20Quality%20Designer%20Work",
                    "description": "Discover the elegance of minimalist design through our curated portfolio. Each piece reflects the creativity and precision of top designers.",
                    "images": [{
                        "url": "https://cdn.wegic.ai/assets/onepage/img/f5036ad3-e983-4e0a-8925-22acab3ccecf.jpg?args=q%3A85%2Frs%3Afit%3A662%3A496%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Minimalist Elegance"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/b68cdf4a-e568-4cdc-be70-0de0186ba5f7.jpg?args=q%3A85%2Frs%3Afit%3A662%3A496%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Artistic Precision"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/165f25e8-c03b-4d00-bb49-337216ef65b3.jpg?args=q%3A85%2Frs%3Afit%3A662%3A496%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Innovative Craftsmanship"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/cda221ef-c82d-475a-8807-256840c198f1.jpg?args=q%3A85%2Frs%3Afit%3A662%3A496%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Seamless Artistry"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/49b95937-96b2-4d20-a749-e90c50131e0e.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Creative Vision"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/d70d433f-a6e7-445e-b93e-e390a3bb94cb.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Functional Design"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/eb1cca39-b9d9-440b-b790-8264d9abdea0.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Artistic Innovation"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/6194119b-523e-45b5-b221-9ca9d17d582b.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Portfolio Excellence"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/3425b45d-9917-45af-8d88-846a760ab8f2.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Design Mastery"
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/df01c687-62bd-463c-9f07-ef0382493a8d.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1",
                        "name": "Crafted Innovation"
                    }],
                    key: "KrbG2GRrMCdQDW74DK3f2"
                })));
            } catch (error) {}
        } {
            try {
                function Carousel_02({
                    prevSlideIcon = "fa-solid fa-arrow-circle-left",
                    nextSlideIcon = "fa-solid fa-arrow-circle-right",
                    buttonPrevious = "text=Explore Previous Designs&link=portfolio#previous",
                    buttonNext = "text=Discover Next Creations&link=portfolio#next",
                    images = [{
                        "src": "https://cdn.wegic.ai/assets/onepage/img/316e0098-2063-4e5c-922e-4592eb400fcd.jpg?args=q%3A85%2Frs%3Afit%3A0%3A0%2Fdpr%3A2%2Fsm%3A1",
                        "label": "link=&target=_blank&text=",
                        "description": "link=&target=_blank&text="
                    }, {
                        "src": "https://cdn.wegic.ai/assets/onepage/img/d9ef20d0-1242-4db3-a561-4285fa02c188.jpg?args=q%3A85%2Frs%3Afit%3A2052%3A1154%2Fdpr%3A2%2Fsm%3A1",
                        "label": "link=&target=_blank&text=",
                        "description": "link=&target=_blank&text="
                    }, {
                        "src": "https://cdn.wegic.ai/assets/onepage/img/98782aee-11c2-49c6-a90c-f61acbc556d9.jpg?args=q%3A85%2Frs%3Afit%3A0%3A0%2Fdpr%3A2%2Fsm%3A1",
                        "label": "link=&target=_blank&text=",
                        "description": "link=&target=_blank&text="
                    }],
                    interval = 12000,
                    sectionTitle = "BANNER & LANDING PAGE DESIGN"
                }) {
                    const [activeIndex, setActiveIndex] = React.useState(0);
                    const goPrev = () => setActiveIndex(prev => (prev - 1 + images.length) % images.length);
                    const goNext = () => setActiveIndex(prev => (prev + 1) % images.length);
                    const goToSlide = index => setActiveIndex(index);
                    React.useEffect(() => {
                        const timer = setInterval(() => {
                            setActiveIndex(prev => (prev + 1) % images.length);
                        }, interval);
                        return () => clearInterval(timer);
                    }, [interval, images.length]);
                    return /*#__PURE__*/ React.createElement("div", {
                        className: "w-full dark:bg-slate-800",
                        "data-id": "N20YbYRH-x8g44fPU3KRn"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "max-w-7xl w-full mx-auto py-20 px-4"
                    }, /*#__PURE__*/ React.createElement("h2", {
                        className: "text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "sectionTitle"
                    }, sectionTitle)), /*#__PURE__*/ React.createElement("div", {
                        className: "relative"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "absolute bottom-0 left-0 right-0 z-10 mx-auto mb-4 flex list-none justify-center p-0"
                    }, images.map((_, index) => /*#__PURE__*/ React.createElement(EditableButton, {
                        key: index,
                        type: "button",
                        onClick: () => goToSlide(index),
                        className: `mx-1 h-1 rounded w-10 flex-initial cursor-pointer border-0 bg-black/10 dark:bg-white/10 p-0 transition-opacity duration-500 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-40"}`,
                        "aria-label": `Slide ${index + 1}`
                    }))), /*#__PURE__*/ React.createElement("div", {
                        className: "relative w-full overflow-hidden"
                    }, images.map((image, index) => /*#__PURE__*/ React.createElement(AnimateInView, {
                        key: image.src,
                        type: "rise"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: `float-left w-full transition-transform duration-500 ease-in-out ${index === activeIndex ? "block" : "hidden"}`
                    }, /*#__PURE__*/ React.createElement(EditableImg, {
                        propKey: `images_${index}_src`,
                        className: "IMAGE block w-full aspect-video rounded-lg object-cover bg-slate-100",
                        src: image.src,
                        alt: ""
                    }), /*#__PURE__*/ React.createElement("div", {
                        className: "absolute px-6 inset-x-0 bottom-5 hidden py-5 text-center text-white/90 md:block"
                    }, /*#__PURE__*/ React.createElement("h1", {
                        className: "TITLE-PRIMARY text-4xl font-bold mb-3"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `images_${index}_label`
                    }, image.label)), /*#__PURE__*/ React.createElement("p", {
                        className: "DESC"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `images_${index}_description`
                    }, image.description))))))), /*#__PURE__*/ React.createElement(EditableButton, {
                        className: "BTN-SECONDARY absolute bottom-0 left-0 top-0 z-10 flex w-1/6 items-center justify-center bg-none p-0 text-center text-white/90 opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-90",
                        type: "button",
                        onClick: goPrev
                    }, /*#__PURE__*/ React.createElement(EditableIcon, {
                        propKey: "prevSlideIcon",
                        icon: prevSlideIcon,
                        iconLibrary: "FontAwesome",
                        className: "text-xl text-white/90"
                    }), /*#__PURE__*/ React.createElement("span", {
                        className: "sr-only"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `buttonPrevious`
                    }, buttonPrevious))), /*#__PURE__*/ React.createElement(EditableButton, {
                        className: "BTN-SECONDARY absolute bottom-0 right-0 top-0 z-10 flex w-1/6 items-center justify-center bg-none p-0 text-center text-white/90 opacity-50 transition-opacity duration-150 ease-in-out hover:opacity-90",
                        type: "button",
                        onClick: goNext
                    }, /*#__PURE__*/ React.createElement(EditableIcon, {
                        propKey: "nextSlideIcon",
                        icon: nextSlideIcon,
                        iconLibrary: "FontAwesome",
                        className: "text-xl text-white/90"
                    }), /*#__PURE__*/ React.createElement("span", {
                        className: "sr-only"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `buttonNext`
                    }, buttonNext))))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "N20YbYRH-x8g44fPU3KRn"
                }, /*#__PURE__*/ React.createElement(Carousel_02, {
                    "prevSlideIcon": "fa-solid fa-arrow-circle-left",
                    "nextSlideIcon": "fa-solid fa-arrow-circle-right",
                    "buttonPrevious": "text=Explore Previous Designs&link=portfolio#previous",
                    "buttonNext": "text=Discover Next Creations&link=portfolio#next",
                    "images": [{
                        "src": "https://cdn.wegic.ai/assets/onepage/img/316e0098-2063-4e5c-922e-4592eb400fcd.jpg?args=q%3A85%2Frs%3Afit%3A0%3A0%2Fdpr%3A2%2Fsm%3A1",
                        "label": "link=&target=_blank&text=",
                        "description": "link=&target=_blank&text="
                    }, {
                        "src": "https://cdn.wegic.ai/assets/onepage/img/d9ef20d0-1242-4db3-a561-4285fa02c188.jpg?args=q%3A85%2Frs%3Afit%3A2052%3A1154%2Fdpr%3A2%2Fsm%3A1",
                        "label": "link=&target=_blank&text=",
                        "description": "link=&target=_blank&text="
                    }, {
                        "src": "https://cdn.wegic.ai/assets/onepage/img/98782aee-11c2-49c6-a90c-f61acbc556d9.jpg?args=q%3A85%2Frs%3Afit%3A0%3A0%2Fdpr%3A2%2Fsm%3A1",
                        "label": "link=&target=_blank&text=",
                        "description": "link=&target=_blank&text="
                    }],
                    "interval": 12000,
                    "sectionTitle": "link=&target=_blank&text=Banner%20%26amp%3B%20Landing%20Page%20Design",
                    key: "N20YbYRH-x8g44fPU3KRn"
                })));
            } catch (error) {}
        } {
            try {
                function Gallery_02({
                    title = "Exclusive Design Studio Portfolio Showcase",
                    descriptions = ["Discover the elegance of high-quality designer work through our engaging portfolio. Each piece is crafted to perfection, showcasing the creativity of top designers.", "Immerse yourself in the world of innovative designs and smooth animations. Our portfolio is a testament to artistic excellence and professional craftsmanship."],
                    images = ["https://cdn.wegic.ai/assets/onepage/img/385720d5-aed8-4613-8504-363532f5cdf4.png?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/a04e49e2-b710-4a2b-accd-8d27165ba109.png?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1", "https://images.unsplash.com/photo-1697534538936-f6d2e626d199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjkwMTI0MDF8&ixlib=rb-4.0.3&q=80&h=800", "https://images.unsplash.com/photo-1653974123446-3eeff06fb6fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjkwMTI0MDJ8&ixlib=rb-4.0.3&q=80&h=800", "https://images.unsplash.com/photo-1623293446352-1d03bb0fb6ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjkwMTI0MDF8&ixlib=rb-4.0.3&q=80&h=800", "https://images.unsplash.com/photo-1646345041488-eacb16944e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjkwMTI0MDJ8&ixlib=rb-4.0.3&q=80&h=800", "https://images.unsplash.com/photo-1580193090099-5f31cf4e7202?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjkwMTI0MDJ8&ixlib=rb-4.0.3&q=80&h=800", "https://images.unsplash.com/photo-1529854140025-25995121f16f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjkwMTI0MDJ8&ixlib=rb-4.0.3&q=80&h=800", "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjkwMTI0MDJ8&ixlib=rb-4.0.3&q=80&h=800", "https://images.unsplash.com/photo-1506143925201-0252c51780b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjkwMTI0MDJ8&ixlib=rb-4.0.3&q=80&h=800", "https://source.unsplash.com/600x600/?digital", "https://source.unsplash.com/600x600/?experience"]
                }) {
                    return /*#__PURE__*/ React.createElement("section", {
                        className: "bg-white dark:bg-slate-800 py-10",
                        "data-id": "gqpKOlwjpRhwKAcZkkMV-"
                    }, /*#__PURE__*/ React.createElement(AnimateInView, {
                        type: "rise"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "max-w-7xl mx-auto py-10 px-4"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "max-w-lg mx-auto text-center lg:text-left lg:max-w-none lg:mx-0"
                    }, /*#__PURE__*/ React.createElement("h2", {
                        className: "TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-slate-50"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "title"
                    }, title)), /*#__PURE__*/ React.createElement("div", {
                        className: "mt-4 lg:mt-6 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-8"
                    }, descriptions.map((description, index) => /*#__PURE__*/ React.createElement("p", {
                        key: index,
                        className: "DESC text-base font-normal text-slate-700 dark:text-slate-300 mt-4 lg:mt-0"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `descriptions_${index}`
                    }, description))))), /*#__PURE__*/ React.createElement("div", {
                        className: "grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12 sm:mt-16 lg:mt-16"
                    }, images.map((imageUrl, index) => /*#__PURE__*/ React.createElement(EditableImg, {
                        propKey: `images_${index}`,
                        className: "IMAGE w-[10rem] h-[10rem] aspect-[4/3] object-cover rounded-lg bg-slate-100",
                        src: imageUrl,
                        alt: imageUrl
                    }))))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "gqpKOlwjpRhwKAcZkkMV-"
                }, /*#__PURE__*/ React.createElement(Gallery_02, {
                    "title": "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-weight%3A%20bolder%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-size%3A%2024pt%3B%20line-height%3A%2034.24px%3B%22%3E%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3BFeeds%20Design%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%3E%3Cspan%20style%3D%22font-size%3A28.0pt%3Bline-height%3A107%25%3Bmso-bidi-font-family%3A%0ACalibri%3Bmso-bidi-theme-font%3Aminor-latin%22%3E%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E",
                    "descriptions": ["link=&target=_blank&text=Investing%20in%20an%20eye-catching%20social%20media%20design%20can%20yield%20long-term%20benefits%20such%20as%20increased%20brand%20awareness%2C%20stronger%20customer%20trust%2C%20and%20higher%20conversion%20rates.%3Cbr%3E", "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%3E%3Cbr%3E%3C%2Fp%3E"],
                    "images": ["https://cdn.wegic.ai/assets/onepage/img/385720d5-aed8-4613-8504-363532f5cdf4.png?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/a04e49e2-b710-4a2b-accd-8d27165ba109.png?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/7011ff2b-c626-47d3-b5c2-a09490b32631.png?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/66e37bf5-459a-44b5-be27-585b5827191f.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/6d98f0bf-d021-474d-a2b7-8a0559992975.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/3837c535-2fbc-46c4-9b28-cc967173dcbc.jpeg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/929b12e6-0beb-445a-856a-7de32146037d.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/f967680c-3660-4f77-b785-98a9d18e5afe.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/1758a7d9-e22e-47b8-ba26-50037d66a751.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/6c339356-8389-46a2-aec5-86be8661fd1b.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/1005fd05-6a4d-448a-8a52-12bf598d9b58.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1", "https://cdn.wegic.ai/assets/onepage/img/4062d392-b3fd-413a-b265-32421df75715.jpg?args=q%3A85%2Frs%3Afit%3A320%3A320%2Fdpr%3A2%2Fsm%3A1"],
                    key: "gqpKOlwjpRhwKAcZkkMV-"
                })));
            } catch (error) {}
        } {
            try {
                function Gallery_01({
                    title = "link=&target=_blank&text=",
                    description = "link=&target=_blank&text=",
                    images = [{
                        "url": "https://cdn.wegic.ai/assets/onepage/img/695a1e72-40cf-40a7-bbee-90412090c4f5.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/d948cd67-a3a9-42c4-b4ee-e76aace7cc10.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/b5b3196a-97cf-4632-81d7-5a2c86f4ed00.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/10a10767-5706-42d4-bb9a-4c7144ea75ac.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/9cbf0ac1-1e92-4ed8-990f-2b3c6e04b1cf.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/f88f6dc7-966a-418e-8986-15a4ef38bb94.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/7ceb7fe9-b53e-403c-b77e-4665405c9c91.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/1dd89c26-4344-4151-beee-6677425e5f17.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/467605a7-2f62-4871-a9a1-8be9cac5c2bb.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/390c9c9f-4a2b-400a-9ccc-0ba68220650e.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }],
                    primaryButtonAttr = "text=Explore Our Work&link=portfolio",
                    sectionTitle = "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cb%3E%3Cspan%20style%3D%22font-size%3A24.0pt%3B%0Aline-height%3A107%25%22%3E%26nbsp%3B%20%26nbsp%3B%20Streetwear%20Design%3C%2Fspan%3E%3C%2Fb%3E%3C%2Fp%3E",
                    subtitle = "Explore our exclusive collection of streetwear designs that blend comfort with style."
                }) {
                    return /*#__PURE__*/ React.createElement("section", {
                        className: "py-10 bg-white dark:bg-slate-800 sm:py-10 lg:py-10",
                        "data-id": "ZMwBPq3VVuyiA61tZAWXL"
                    }, /*#__PURE__*/ React.createElement(AnimateInView, {
                        type: "rise"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8"
                    }, /*#__PURE__*/ React.createElement("h1", {
                        className: "text-5xl font-bold text-center mb-10 text-slate-900 dark:text-white/90"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "sectionTitle"
                    }, sectionTitle)), /*#__PURE__*/ React.createElement("p", {
                        className: "text-xl text-center mb-10 text-slate-700 dark:text-white/80"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "subtitle"
                    }, subtitle)), /*#__PURE__*/ React.createElement("div", {
                        className: "lg:flex lg:items-end lg:justify-between"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "max-w-md mx-auto text-center lg:text-left lg:mx-0"
                    }, /*#__PURE__*/ React.createElement("h2", {
                        className: "TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white/90"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "title"
                    }, title)), /*#__PURE__*/ React.createElement("p", {
                        className: "DESC mt-6 text-base font-medium text-slate-900 dark:text-white/80"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "description"
                    }, description))))), /*#__PURE__*/ React.createElement("div", {
                        className: "flex w-full gap-6 pb-2 mt-12 overflow-x-auto sm:mt-16 snap-x"
                    }, images.map((image, index) => /*#__PURE__*/ React.createElement("div", {
                        key: index,
                        className: "relative overflow-hidden snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6"
                    }, /*#__PURE__*/ React.createElement(EditableImg, {
                        propKey: `images_${index}_url`,
                        className: "IMAGE w-[18.75rem] h-[25rem] aspect-[3/4] object-cover rounded-lg bg-slate-100",
                        src: image.url,
                        alt: image.name
                    }), /*#__PURE__*/ React.createElement("p", {
                        className: "TEXT-CONTENT mt-5 text-base font-bold text-slate-700 dark:text-white/80"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `images_${index}_name`
                    }, image.name)))))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "ZMwBPq3VVuyiA61tZAWXL"
                }, /*#__PURE__*/ React.createElement(Gallery_01, {
                    "title": "link=&target=_blank&text=",
                    "description": "link=&target=_blank&text=",
                    "images": [{
                        "url": "https://cdn.wegic.ai/assets/onepage/img/695a1e72-40cf-40a7-bbee-90412090c4f5.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/d948cd67-a3a9-42c4-b4ee-e76aace7cc10.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/b5b3196a-97cf-4632-81d7-5a2c86f4ed00.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/10a10767-5706-42d4-bb9a-4c7144ea75ac.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/9cbf0ac1-1e92-4ed8-990f-2b3c6e04b1cf.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/f88f6dc7-966a-418e-8986-15a4ef38bb94.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/7ceb7fe9-b53e-403c-b77e-4665405c9c91.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/1dd89c26-4344-4151-beee-6677425e5f17.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/467605a7-2f62-4871-a9a1-8be9cac5c2bb.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }, {
                        "url": "https://cdn.wegic.ai/assets/onepage/img/390c9c9f-4a2b-400a-9ccc-0ba68220650e.jpg?args=q%3A85%2Frs%3Afit%3A600%3A800%2Fdpr%3A2%2Fsm%3A1",
                        "name": "link=&target=_blank&text="
                    }],
                    "primaryButtonAttr": "text=Explore Our Work&link=portfolio",
                    "sectionTitle": "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cb%3E%3Cspan%20style%3D%22font-size%3A24.0pt%3B%0Aline-height%3A107%25%22%3E%26nbsp%3B%20Streetwear%20Design%3C%2Fspan%3E%3C%2Fb%3E%3C%2Fp%3E",
                    "subtitle": "link=&target=_blank&text=%3Cspan%20style%3D%22font-size%3A%2016px%3B%22%3Efashion%20movement%20that%20originated%20on%20the%20streets%20and%20has%20since%20evolved%20into%20a%20global%20phenomenon.%20It%27s%20characterized%20by%20its%20casual%2C%20comfortable%2C%20and%20often%20edgy%20aesthetic%2C%20inspired%20by%20urban%20culture%2C%20skateboarding%2C%20hip-hop%2C%20and%20other%20subcultures.%3C%2Fspan%3E",
                    key: "ZMwBPq3VVuyiA61tZAWXL"
                })));
            } catch (error) {}
        } {
            try {
                function Reviews_04({
                    title = 'Customer\'s Review',
                    description = 'This is just a simple text made for this unique and awesome template, you can replace it with any text.',
                    reviews = [{
                        name: 'Olivia Stanton',
                        role: 'Creative Director',
                        image: 'https://source.unsplash.com/random/1000x1000/?collaboration',
                        feedback: 'Before exploring The Art of Iconology, my perspective on iconography was fairly basic. This book has not only enhanced my skills but has inspired a whole new wave of creativity in our projects. A must-read for any designer!',
                        rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star']
                    }, {
                        name: 'Ethan Parker',
                        role: 'Design Lead',
                        image: 'https://source.unsplash.com/random/1000x1000/?vision',
                        feedback: 'Our design process was transformed with the adoption of the VectorStream software suite. What once felt like a chore is now an exciting journey of visual storytelling. Every design team needs this tool in their arsenal.',
                        rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star']
                    }, {
                        name: 'Sophia Larson',
                        role: 'Head of UX',
                        image: 'https://source.unsplash.com/random/1000x1000/?user-experience',
                        feedback: 'I\'m impressed with the intuitiveness of the CanvasFlow app. As a UX professional, watching our user satisfaction metrics soar has been a delightful experience. It\'s nice to see our financials are also benefiting from this investment.',
                        rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star']
                    }, {
                        name: 'Derek Schmidt',
                        role: 'Product Manager',
                        image: 'https://source.unsplash.com/random/1000x1000/?innovation',
                        feedback: 'Reaching out for support with RenderPro was effortless. The quick turnaround and expert advice saved our product launch and put my mind at ease. I appreciate a company that stands confidently behind its service.',
                        rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star']
                    }, {
                        name: 'Amelia Davis',
                        role: 'Brand Strategist',
                        image: 'https://source.unsplash.com/random/1000x1000/?branding',
                        feedback: 'I never expected an out-of-office reply to solve my query, but here we are. ImageMint\'s guide on sustainable branding practices arrived just in time to revamp our strategy. Kudos to the team for such responsive communication despite your staff\'s retreat.',
                        rating: ['fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star', 'fa-solid fa-star']
                    }]
                }) {
                    return /*#__PURE__*/ React.createElement("div", {
                        className: " dark:bg-slate-800",
                        "data-id": "piBLUdNA4fVRwy8BfF78Q"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: " max-w-7xl mx-auto py-20 px-4"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "grid grid-cols-1 pb-6 text-center"
                    }, /*#__PURE__*/ React.createElement("h3", {
                        className: "TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white md:text-5xl"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "title"
                    }, title)), /*#__PURE__*/ React.createElement("p", {
                        className: "DESC mt-4 text-center  text-slate-700 dark:text-white/70 lg:text-lg "
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "description"
                    }, description))), /*#__PURE__*/ React.createElement("div", {
                        className: "grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-6"
                    }, reviews.map((review, index) => /*#__PURE__*/ React.createElement(AnimateInView, {
                        type: "rise",
                        key: `review_${index}`
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "w-full h-full"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "rounded-xl h-full flex flex-col gap-8 shadow dark:shadow-gray-800 p-8 bg-white dark:bg-slate-900"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "flex items-center pb-8 border-b border-black/10 dark:border-white/10"
                    }, /*#__PURE__*/ React.createElement(EditableImg, {
                        propKey: `reviews_${index}_image`,
                        className: "IMAGE h-14 w-14 rounded-full shadow dark:shadow-gray-800 object-cover aspect-[1/1]",
                        src: review.image
                    }), /*#__PURE__*/ React.createElement("div", {
                        className: "pl-3"
                    }, /*#__PURE__*/ React.createElement(EditableButton, {
                        className: "TEXT-LINK text-lg font-semibold text-sky-600 hover:text-sky-700 dark:hover:text-white duration-500"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `reviews_${index}_name`
                    }, review.name)), /*#__PURE__*/ React.createElement("p", {
                        className: "text-slate-500 dark:text-white/90"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `reviews_${index}_role`
                    }, review.role)))), /*#__PURE__*/ React.createElement("div", {
                        className: " flex flex-col gap-6"
                    }, /*#__PURE__*/ React.createElement("p", {
                        className: "TEXT-CONTENT text-slate-500 dark:text-white/90"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `reviews_${index}_feedback`
                    }, review.feedback)), /*#__PURE__*/ React.createElement("ul", {
                        className: "flex items-center gap-2"
                    }, review.rating.map((icon, iconIndex) => /*#__PURE__*/ React.createElement(EditableIcon, {
                        propKey: `reviews_${index}_rating_${iconIndex}`,
                        icon: icon,
                        iconLibrary: "FontAwesome",
                        className: "text-amber-400 text-xl"
                    })))))))))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "piBLUdNA4fVRwy8BfF78Q"
                }, /*#__PURE__*/ React.createElement(Reviews_04, {
                    "title": "link=&target=_blank&text=What%20Our%20Clients%20Say",
                    "description": "Hear from those who have experienced our dedication to design excellence and client satisfaction.",
                    "reviews": [{
                        "name": "Olivia Stanton",
                        "role": "link=&target=_blank&text=client",
                        "image": "https://cdn.wegic.ai/assets/onepage/ai/image/6e06272c-e4c9-402b-96a9-eeef6fba122b.jpeg",
                        "feedback": "Depressedesign has redefined our approach to design. Their creativity and professionalism are unmatched.",
                        "rating": ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star"]
                    }, {
                        "name": "Ethan Parker",
                        "role": "link=&target=_blank&text=client",
                        "image": "https://cdn.wegic.ai/assets/onepage/ai/image/8e89611d-5feb-4fb0-b9e2-07ba64ae444a.jpeg",
                        "feedback": "Working with Depressedesign has been a transformative experience. Their innovative solutions have elevated our projects.",
                        "rating": ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star"]
                    }, {
                        "name": "Sophia Larson",
                        "role": "link=&target=_blank&text=client",
                        "image": "https://cdn.wegic.ai/assets/onepage/ai/image/5613d373-b531-4121-b974-467e40ada949.jpeg",
                        "feedback": "The attention to detail and user-centric approach at Depressedesign has significantly improved our user satisfaction.",
                        "rating": ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star"]
                    }, {
                        "name": "Derek Schmidt",
                        "role": "link=&target=_blank&text=client",
                        "image": "https://cdn.wegic.ai/assets/onepage/ai/image/0019bb96-23eb-4b86-a621-7ef1b3ba583d.jpeg",
                        "feedback": "Depressedesign's commitment to excellence is evident in every interaction. Their support and expertise are invaluable.",
                        "rating": ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star"]
                    }, {
                        "name": "Amelia Davis",
                        "role": "link=&target=_blank&text=client",
                        "image": "https://cdn.wegic.ai/assets/onepage/ai/image/38ac68b7-5b59-4875-98cf-20bde8307c9d.jpeg",
                        "feedback": "The innovative branding strategies provided by Depressedesign have revitalized our brand presence.",
                        "rating": ["fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star", "fa-solid fa-star"]
                    }],
                    key: "piBLUdNA4fVRwy8BfF78Q"
                })));
            } catch (error) {}
        }
        routerList.push({
            path: "portfolio",
            element: /*#__PURE__*/ React.createElement(Layout, null, list)
        });
    } {
        const list = []; {
            try {
                function Header_01({
                    title = "Discover Our Exclusive Design Services",
                    description = "Dive into a world of creativity with our comprehensive service offerings tailored to elevate your brand.",
                    stats = [{
                        "name": "Projects Completed",
                        "value": "200+"
                    }, {
                        "name": "Satisfied Clients",
                        "value": "150+"
                    }, {
                        "name": "Years of Experience",
                        "value": "5+"
                    }],
                    imageUrl = "https://source.unsplash.com/random/1920x1080/?minimalist,office,workspace,1"
                }) {
                    return /*#__PURE__*/ React.createElement("div", {
                        className: "relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32",
                        "data-id": "WH-BkiG0SMgMDZLM52UXX"
                    }, /*#__PURE__*/ React.createElement(EditableImg, {
                        isFCP: true,
                        propKey: "imageUrl",
                        className: "absolute inset-0 -z-10 h-full w-full object-cover object-center",
                        src: imageUrl,
                        alt: "Minimalist Office Workspace"
                    }), /*#__PURE__*/ React.createElement("div", {
                        className: "absolute inset-0 bg-blue-900 opacity-80"
                    }), /*#__PURE__*/ React.createElement("div", {
                        className: "mx-auto max-w-7xl px-6 lg:px-8 relative z-10"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "mx-auto max-w-2xl lg:mx-0"
                    }, /*#__PURE__*/ React.createElement("h2", {
                        className: "text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "title"
                    }, title)), /*#__PURE__*/ React.createElement("p", {
                        className: "text-lg leading-8 text-gray-300"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "description"
                    }, description))), /*#__PURE__*/ React.createElement("div", {
                        className: "mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none"
                    }, /*#__PURE__*/ React.createElement("dl", {
                        className: "grid grid-cols-1 gap-8 sm:grid-cols-3"
                    }, stats.map((stat, index) => /*#__PURE__*/ React.createElement("div", {
                        key: stat.name,
                        className: "flex flex-col items-start"
                    }, /*#__PURE__*/ React.createElement("dd", {
                        className: "text-4xl font-bold text-white mb-2"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `stats_${index}_value`
                    }, stat.value)), /*#__PURE__*/ React.createElement("dt", {
                        className: "text-base font-medium text-gray-300"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `stats_${index}_name`
                    }, stat.name))))))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "WH-BkiG0SMgMDZLM52UXX"
                }, /*#__PURE__*/ React.createElement(Header_01, {
                    "title": "link=&target=_blank&text=Discover%20Our%20Exclusive%20Design%20Services",
                    "description": "Dive into a world of creativity with our comprehensive service offerings tailored to elevate your brand.",
                    "stats": [{
                        "name": "Projects Completed",
                        "value": "200+"
                    }, {
                        "name": "Satisfied Clients",
                        "value": "150+"
                    }, {
                        "name": "Years of Experience",
                        "value": "5+"
                    }],
                    "imageUrl": "https://images.unsplash.com/photo-1501959181532-7d2a3c064642?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg5NjA5ODF8&ixlib=rb-4.0.3&q=80&w=1920",
                    key: "WH-BkiG0SMgMDZLM52UXX"
                })));
            } catch (error) {}
        } {
            try {
                function Pricing_10({
                    title = "Our Pricing Plans",
                    description = "Discover the perfect plan tailored for your design journey with Depressedesign. Each option crafted to transform your vision into an unforgettable reality.",
                    plans = [{
                        "name": "link=&target=_blank&text=%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3BSocial%20Media%20Design",
                        "id": "tier-freelancer",
                        "priceMonthly": "link=&target=_blank&text=%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B50K%26nbsp%3B%20%26nbsp%3B%26nbsp%3B",
                        "priceAnnually": "$180",
                        "description": "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%20align%3D%22center%22%20style%3D%22text-align%3Acenter%22%3EDepressedesign%27s%0Asocial%20media%20designs%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20align%3D%22center%22%20style%3D%22text-align%3Acenter%22%3Eoffer%20a%20unique%20and%0Athought-provoking%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20align%3D%22center%22%20style%3D%22text-align%3Acenter%22%3Evisual%20experience.%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fp%3E",
                        "features": [{}, {
                            "text": "link=&target=_blank&text=%3Cul%20type%3D%22disc%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20margin-top%3A%200cm%3B%20color%3A%20rgb%2871%2C%2085%2C%20105%29%3B%20font-size%3A%2016px%3B%20text-align%3A%20center%3B%22%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BConcept%20from%20Client%3Co%3Ap%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%22%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%3Cbr%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%22%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B2%20Revisi%20minor%3Co%3Ap%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%22%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BHigh%20Resolution%20Design%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BDelivery%20in%201%20days%3Co%3Ap%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%22%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BReceive%20jpg%2Fpng%20files%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E"
                        }, {}, {}],
                        "featured": false,
                        "ctaAttr": "link=https%3A%2F%2Fwa.me%2F085157332251%3Ftext%3DHallo%2520Depressedesign%21%2520i%2520need%2520social%2520media%2520design.&target=_blank&text=Select%20Plan"
                    }, {
                        "name": "link=&target=_blank&text=Banner%20%26amp%3B%20Landing%20Page%20Design",
                        "id": "tier-startup",
                        "priceMonthly": "link=&target=_blank&text=%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%2075K",
                        "priceAnnually": "$450",
                        "description": "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%20align%3D%22center%22%20style%3D%22text-align%3Acenter%22%3EThe%20banner%20and%0Alanding%20page%20design%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20align%3D%22center%22%20style%3D%22text-align%3Acenter%22%3E%26nbsp%3Bby%20Depressedesign%26nbsp%3B%3Cspan%20style%3D%22color%3A%20rgb%2875%2085%2099%20%2F%20var%28--tw-text-opacity%29%29%3B%20font-size%3A%200.875rem%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%20font-family%3A%20var%28--custom-body-font%29%3B%22%3Eis%20a%20unique%20and%20minimalist%0Aaesthetic.%3C%2Fspan%3E%3C%2Fp%3E",
                        "features": [{}, {
                            "text": "link=&target=_blank&text=%3Cul%20type%3D%22disc%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20margin-top%3A%200cm%3B%20color%3A%20rgb%2871%2C%2085%2C%20105%29%3B%20font-size%3A%2016px%3B%20text-align%3A%20center%3B%22%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BConcept%20from%20Client%3Co%3Ap%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%22%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%3Cbr%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%22%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B2%20Revisi%20minor%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BHigh%20Resolution%20Design%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BDelivery%20in%201%20days%3Co%3Ap%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%22%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BReceive%20jpg%2Fpng%20files%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E"
                        }, {}, {}],
                        "featured": false,
                        "ctaAttr": "link=https%3A%2F%2Fwa.me%2F085157332251%3Ftext%3DHallo%2520Depressedesign%21%2520i%2520need%2520banner%2520%26%2520landing%2520page%2520design.&target=_blank&text=Select%20Plan"
                    }, {
                        "name": "link=&target=_blank&text=%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3BStreetwear%2FT-shirt%20Design",
                        "id": "tier-enterprise",
                        "priceMonthly": "link=&target=_blank&text=%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B205K",
                        "priceAnnually": "$5000",
                        "description": "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%20align%3D%22center%22%20style%3D%22text-align%3Acenter%22%3EDepressedesign%0Astreetwear%20is%20a%20unique%2C%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20align%3D%22center%22%20style%3D%22text-align%3Acenter%22%3Eintrospective%2C%20and%0Aemotionally%20resonant%20designs.%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fp%3E",
                        "features": [{}, {
                            "text": "Unlimited design assets"
                        }, {}, {}],
                        "featured": true,
                        "ctaAttr": "link=https%3A%2F%2Fwa.me%2F085157332251%3Ftext%3DHallo%2520Depressedesign%21%2520i%2520need%2520streetwear%2Ft-shirt%2520design.&target=_blank&text=Select%20Plan"
                    }],
                    frequencyOptions = [{
                        "value": "monthly",
                        "label": "link=&target=_blank&text=Unit"
                    }, {
                        "value": "annually",
                        "label": "link=&target=_blank&text=Package"
                    }]
                }) {
                    const [frequency, setFrequency] = React.useState(frequencyOptions[0].value);
                    return /*#__PURE__*/ React.createElement("div", {
                        className: "bg-white dark:bg-slate-800 py-16 sm:py-20",
                        "data-id": "3RA_4H_8KCGUDt_PBOho4"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "mx-auto max-w-7xl px-6 lg:px-8"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "mx-auto max-w-4xl text-center"
                    }, /*#__PURE__*/ React.createElement("h2", {
                        className: "TITLE-PRIMARY text-base font-semibold leading-7 text-sky-500 dark:text-slate-200"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "title"
                    }, title)), /*#__PURE__*/ React.createElement("p", {
                        className: "TITLE-SECONDARY mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-50 sm:text-5xl"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "description"
                    }, description))), /*#__PURE__*/ React.createElement("div", {
                        className: "mt-16 flex justify-center"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200 dark:ring-slate-700"
                    }, frequencyOptions.map((option, index) => /*#__PURE__*/ React.createElement(EditableButton, {
                        key: option.value,
                        className: `cursor-pointer rounded-full px-2.5 py-1 ${frequency === option.value ? 'bg-sky-500 text-white' : 'text-gray-500 dark:text-slate-400'}`,
                        onClick: () => setFrequency(option.value)
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `frequencyOptions_${index}_label`
                    }, option.label))))), /*#__PURE__*/ React.createElement("div", {
                        className: "isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
                    }, plans.map((plan, index) => /*#__PURE__*/ React.createElement("div", {
                        key: plan.id,
                        className: `rounded-3xl p-8 ring-1 xl:p-10 ${plan.featured ? 'bg-white dark:bg-slate-900 ring-gray-900 dark:ring-slate-700' : 'ring-gray-200 dark:ring-slate-700'}`
                    }, /*#__PURE__*/ React.createElement("h3", {
                        id: plan.id,
                        className: `TITLE-SECONDARY text-lg font-semibold leading-8 ${plan.featured ? 'text-gray-900' : 'text-gray-900 dark:text-slate-50'}`
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `plans_${index}_name`
                    }, plan.name)), /*#__PURE__*/ React.createElement("p", {
                        className: `DESC mt-4 text-sm leading-6 ${plan.featured ? 'text-gray-600' : 'text-gray-600 dark:text-slate-300'}`
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `plans_${index}_description`
                    }, plan.description)), /*#__PURE__*/ React.createElement("p", {
                        className: "mt-6 flex items-baseline gap-x-1"
                    }, /*#__PURE__*/ React.createElement("span", {
                        className: `text-4xl font-bold tracking-tight ${plan.featured ? 'text-gray-900' : 'text-gray-900 dark:text-slate-50'}`
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `plans_${index}_${frequency === 'monthly' ? 'priceMonthly' : 'priceAnnually'}`
                    }, frequency === 'monthly' ? plan.priceMonthly : plan.priceAnnually))), /*#__PURE__*/ React.createElement(EditableButton, {
                        href: plan.href,
                        "aria-describedby": plan.id,
                        className: `BTN-PRIMARY w-full mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${plan.featured ? 'bg-sky-500 text-white hover:bg-sky-400 focus-visible:outline-sky-500' : 'bg-sky-500 text-white shadow-sm hover:bg-sky-400 focus-visible:outline-sky-500'}`
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `plans_${index}_ctaAttr`
                    }, plan.ctaAttr)), /*#__PURE__*/ React.createElement("ul", {
                        className: `mt-8 space-y-3 text-sm leading-6 xl:mt-10 ${plan.featured ? 'text-gray-600' : 'text-gray-600 dark:text-slate-300'}`
                    }, plan.features.map((feature, featureIndex) => /*#__PURE__*/ React.createElement("li", {
                        key: feature,
                        className: "flex gap-x-3"
                    }, /*#__PURE__*/ React.createElement(EditableIcon, {
                        propKey: `plans_${index}_features_${featureIndex}_icon`,
                        icon: feature.icon,
                        iconLibrary: "FontAwesome",
                        className: `h-6 w-5 flex-none text-lg ${plan.featured ? 'text-sky-500' : 'text-sky-500 dark:text-slate-200'}`,
                        "aria-hidden": "true"
                    }), /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `plans_${index}_features_${featureIndex}_text`
                    }, feature.text)))))))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "3RA_4H_8KCGUDt_PBOho4"
                }, /*#__PURE__*/ React.createElement(Pricing_10, {
                    "title": "Our Pricing Plans",
                    "description": "Discover the perfect plan tailored for your design journey with Depressedesign. Each option crafted to transform your vision into an unforgettable reality.",
                    "plans": [{
                        "name": "link=&target=_blank&text=Social%20Media%20Design",
                        "id": "tier-freelancer",
                        "priceMonthly": "link=&target=_blank&text=50K%26nbsp%3B",
                        "priceAnnually": "link=&target=_blank&text=250K",
                        "description": "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bline-height%3A107%25%3Bfont-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A%0A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3AEN-ID%22%3E%22Get%20a%20discounted%20price%0Awhen%20you%20order%20a%20bundle%20of%206X%20social%20media%20designs%2C%26nbsp%3B%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%20font-size%3A%2012pt%3B%20color%3A%20rgb%2875%2085%2099%20%2F%20var%28--tw-text-opacity%29%29%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%22%3EYou%27ll%20save%2050K%21%22%3C%2Fspan%3E%3C%2Fp%3E",
                        "features": [{}, {
                            "text": "link=&target=_blank&text=%3Cul%20type%3D%22disc%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20margin-top%3A%200cm%3B%20color%3A%20rgb%2871%2C%2085%2C%20105%29%3B%20font-size%3A%2016px%3B%20text-align%3A%20center%3B%22%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BConcept%20from%20Client%3Co%3Ap%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%22%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%3Cbr%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%22%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B2X%20Revisi%20minor%3Co%3Ap%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%22%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BHigh%20Resolution%20Design%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BDelivery%20in%201-3%20days%3Co%3Ap%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%22%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BReceive%20jpg%2Fpng%20files%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E"
                        }, {}, {}],
                        "featured": false,
                        "ctaAttr": "link=https%3A%2F%2Fwa.me%2F085157332251%3Ftext%3DHallo%2520Depressedesign%21%2520i%2520need%2520social%2520media%2520design.&target=_blank&text=Select%20Plan"
                    }, {
                        "name": "link=&target=_blank&text=Banner%2FPage%20Design",
                        "id": "tier-startup",
                        "priceMonthly": "link=&target=_blank&text=75K",
                        "priceAnnually": "link=&target=_blank&text=195K",
                        "description": "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bline-height%3A107%25%3Bfont-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A%0A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3AEN-ID%22%3E%22Get%20a%20discounted%20price%0Awhen%20you%20order%20a%20bundle%20of%203X%20Banner%2Fpage%20designs%2C%26nbsp%3B%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%20font-size%3A%2012pt%3B%20color%3A%20rgb%2875%2085%2099%20%2F%20var%28--tw-text-opacity%29%29%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%22%3EYou%27ll%20save%2030K%21%22%3C%2Fspan%3E%3C%2Fp%3E",
                        "features": [{}, {
                            "text": "link=&target=_blank&text=%3Cul%20type%3D%22disc%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20margin-top%3A%200cm%3B%20color%3A%20rgb%2871%2C%2085%2C%20105%29%3B%20font-size%3A%2016px%3B%20text-align%3A%20center%3B%22%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BConcept%20from%20Client%3Co%3Ap%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%22%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%3Cbr%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%22%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B3X%20Revisi%20minor%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BHigh%20Resolution%20Design%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cbr%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%E2%9C%A6%3Cspan%20style%3D%22text-indent%3A%2036pt%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%22%3E%0A%3C%2Fspan%3E%3Cspan%20style%3D%22text-indent%3A%2036pt%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%20font-size%3A%2012pt%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%20line-height%3A%20107%25%3B%22%3EPrintable%20Design%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%3Cspan%20style%3D%22font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%3Cbr%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BDelivery%20in%201-3%20days%3Co%3Ap%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%22%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BReceive%20jpg%2Fpng%20files%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E"
                        }, {}, {}],
                        "featured": false,
                        "ctaAttr": "link=https%3A%2F%2Fwa.me%2F085157332251%3Ftext%3DHallo%2520Depressedesign%21%2520i%2520need%2520banner%2520%26%2520landing%2520page%2520design.&target=_blank&text=Select%20Plan"
                    }, {
                        "name": "link=&target=_blank&text=Streetwear%20Design",
                        "id": "tier-enterprise",
                        "priceMonthly": "link=&target=_blank&text=205K",
                        "priceAnnually": "link=&target=_blank&text=359K",
                        "description": "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bline-height%3A107%25%3Bfont-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A%0A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3AEN-ID%22%3E%22Get%20a%20discounted%20price%0Awhen%20you%20order%20a%20bundle%20of%202X%20Streetwear%2Ft-shirt%20designs%2C%26nbsp%3B%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%20font-size%3A%2012pt%3B%20color%3A%20rgb%2875%2085%2099%20%2F%20var%28--tw-text-opacity%29%29%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%22%3EYou%27ll%20save%2051K%21%22%3C%2Fspan%3E%3C%2Fp%3E",
                        "features": [{}, {
                            "text": "link=&target=_blank&text=%3Cul%20type%3D%22disc%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20margin-top%3A%200cm%3B%20color%3A%20rgb%2871%2C%2085%2C%20105%29%3B%20font-size%3A%2016px%3B%20text-align%3A%20center%3B%22%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BConcept%20from%20Client%3Co%3Ap%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%22%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%3Cbr%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%22%3E%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B4X%20Revisions%3Co%3Ap%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%22%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BHigh%20Resolution%20Design%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cbr%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%E2%9C%A6%3Cspan%20style%3D%22text-indent%3A%2036pt%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%0A%3C%2Fspan%3E%3Cspan%20style%3D%22text-indent%3A%2036pt%3B%20font-size%3A%2012pt%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%20line-height%3A%20107%25%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3EPrintable%20Design%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22text-indent%3A%2036pt%3B%20font-size%3A%2012pt%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%20line-height%3A%20107%25%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%3Cbr%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%E2%9C%A6%3Cspan%20style%3D%22background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%20--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BDelivery%20in%201-3%20days%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3BReceive%20jpg%2Fpng%2F%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cspan%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3Bpdf%2Fsource%20files%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cbr%3E%3C%2Fli%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%E2%9C%A6%3Cspan%20style%3D%22text-indent%3A%2036pt%3B%20color%3A%20rgb%2875%2085%2099%20%2F%20var%28--tw-text-opacity%29%29%3B%20font-size%3A%200.875rem%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3E%0A%3C%2Fspan%3E%3Cspan%20style%3D%22text-indent%3A%2036pt%3B%20color%3A%20rgb%2875%2085%2099%20%2F%20var%28--tw-text-opacity%29%29%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%20font-size%3A%2012pt%3B%20line-height%3A%20107%25%3B%20font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%22%3EMockup%20t-shirt%2Fhoodie%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E"
                        }, {}, {}],
                        "featured": true,
                        "ctaAttr": "link=https%3A%2F%2Fwa.me%2F085157332251%3Ftext%3DHallo%2520Depressedesign%21%2520i%2520need%2520streetwear%2Ft-shirt%2520design.&target=_blank&text=Select%20Plan"
                    }],
                    "frequencyOptions": [{
                        "value": "monthly",
                        "label": "link=&target=_blank&text=%E2%9C%A6%20Choose%20a%20single%20design%20%E2%9C%A6"
                    }, {
                        "value": "annually",
                        "label": "link=&target=_blank&text=%E2%9C%A6%20Choose%20a%20design%20bundle%20%E2%9C%A6"
                    }],
                    key: "3RA_4H_8KCGUDt_PBOho4"
                })));
            } catch (error) {}
        } {
            try {
                function Pricing_01({
                    title = "Our Pricing Plans",
                    description = "Choose a plan that best suits your design needs and start transforming your ideas into reality.",
                    plans = [{
                        "name": "Basic Design Package",
                        "price": "link=&target=_blank&text=350K",
                        "features": [{
                            "text": "link=&target=_blank&text=%3Cul%20data-sourcepos%3D%225%3A1-11%3A0%22%3E%3Cli%20data-sourcepos%3D%225%3A1-5%3A21%22%3E%3Cul%20style%3D%22margin-top%3A0cm%22%20type%3D%22disc%22%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0A%20%20%20%20%20mso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%20Concept%20from%20Client%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fli%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%3Cbr%3E%0A%20%20%20%20%20%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3Bmso-bidi-font-family%3A%0A%20%20%20%20%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%202%20Revisions%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fli%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%3Co%3Ap%3E%26nbsp%3B%3C%2Fo%3Ap%3E%3C%2Fli%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0A%20%20%20%20%20mso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%20High%20Resolution%20Logo%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fli%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%3Co%3Ap%3E%26nbsp%3B%3C%2Fo%3Ap%3E%3C%2Fli%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0A%20%20%20%20%20mso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%20Delivery%20in%202-3%20days%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fli%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%3Co%3Ap%3E%26nbsp%3B%3C%2Fo%3Ap%3E%3C%2Fli%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0A%20%20%20%20%20mso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%20Receive%20jpg%2C%20png%20files%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fli%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%2Afree%20mockup%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fli%3E%0A%3C%2Ful%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Co%3Ap%3E%26nbsp%3B%3C%2Fo%3Ap%3E%3C%2Fp%3E%3C%2Fli%3E%3C%2Ful%3E"
                        }, {
                            "text": "link=&target=_blank&text="
                        }, {
                            "text": "link=&target=_blank&text="
                        }]
                    }, {
                        "name": "Premium Design Package",
                        "price": "link=&target=_blank&text=650K",
                        "features": [{
                            "text": "link=&target=_blank&text=%3Cul%20type%3D%22disc%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20margin-top%3A%200cm%3B%22%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3Bmso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%0A%3C%2Fspan%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3B%0Amso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3A%0Anone%3Bmso-fareast-language%3AEN-ID%22%3EConcept%20and%20design%20from%20our%20team%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3Bmso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3Bmso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%0A%3C%2Fspan%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3B%0Amso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3A%0Anone%3Bmso-fareast-language%3AEN-ID%22%3EGet%202%20Logo%20Options%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3A%0AEN-ID%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3Bmso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%0A%3C%2Fspan%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3B%0Amso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3A%0Anone%3Bmso-fareast-language%3AEN-ID%22%3E6%20Revisions%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3A%0AEN-ID%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3Bmso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%0A%3C%2Fspan%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3B%0Amso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3A%0Anone%3Bmso-fareast-language%3AEN-ID%22%3EHigh%20Resolution%20Logo%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3A%0AEN-ID%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3Bmso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%0A%3C%2Fspan%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3B%0Amso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3A%0Anone%3Bmso-fareast-language%3AEN-ID%22%3EDelivery%20in%204-6%20days%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bline-height%3A107%25%3Bfont-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A%0A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3AEN-ID%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%20%3C%2Fspan%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3B%0Aline-height%3A107%25%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3A%0AEN-ID%22%3EReceive%20jpg%2C%20png%2C%20pdf%20files%20%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bline-height%3A107%25%3Bfont-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A%0A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3AEN-ID%22%3E%2AFile%20Ai%2FEps%20%2ALogo%20mockup%20%2ABusiness%0ACard%20design%3C%2Fspan%3E%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fp%3E%3C%2Fli%3E%3C%2Ful%3E"
                        }, {}, {}]
                    }, {
                        "name": "Ultimate Design Package",
                        "price": "link=&target=_blank&text=1.000K",
                        "features": [{
                            "text": "Dedicated design team"
                        }, {
                            "text": "Custom solutions"
                        }, {
                            "text": "On-site consultation"
                        }]
                    }],
                    icon = "fa-solid fa-check",
                    buttonTextAttr = "text=Contact Us&link=contact",
                    buttonDescription = "Start your design journey with us today!"
                }) {
                    return /*#__PURE__*/ React.createElement("section", {
                        className: "py-10 bg-white dark:bg-slate-800",
                        "data-id": "VdpSuGoetUW-84Zd2hmTx"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "px-4 mx-auto max-w-7xl py-10 flex flex-col gap-14"
                    }, /*#__PURE__*/ React.createElement(AnimateInView, {
                        type: "rise"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "flex flex-col gap-4 text-center"
                    }, /*#__PURE__*/ React.createElement("h2", {
                        className: "TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-slate-50"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "title"
                    }, title)), /*#__PURE__*/ React.createElement("p", {
                        className: "DESC text-base text-slate-600 dark:text-slate-400"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "description"
                    }, description)))), /*#__PURE__*/ React.createElement("div", {
                        className: " grid grid-cols-1 gap-6 text-center items-center  md:grid-cols-3"
                    }, plans.map((plan, index) => /*#__PURE__*/ React.createElement(AnimateInView, {
                        key: index,
                        type: "rise"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "px-4 py-5 flex flex-col items-center outline outline-offset-0 outline-slate-200 rounded-lg hover:outline-sky-400 active:outline-sky-500 focus:outline-sky-500  dark:outline-slate-700 dark:hover:outline-sky-400  dark:active:outline-sky-500  dark:focus:outline-sky-500"
                    }, /*#__PURE__*/ React.createElement("p", {
                        className: "TITLE-SECONDARY text-lg font-medium text-slate-600 dark:text-slate-400"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `plans_${index}_name`
                    }, plan.name)), /*#__PURE__*/ React.createElement("p", {
                        className: "mt-4 text-6xl font-bold text-slate-900 dark:text-white"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `plans_${index}_price`
                    }, plan.price)), /*#__PURE__*/ React.createElement("ul", {
                        className: "w-fit flex flex-col mt-8 gap-3"
                    }, plan.features.map((feature, featureIndex) => /*#__PURE__*/ React.createElement("div", {
                        key: featureIndex,
                        className: " flex flex-row items-center gap-2.5"
                    }, /*#__PURE__*/ React.createElement(EditableIcon, {
                        propKey: `plans_${index}_features_${featureIndex}_icon`,
                        icon: feature.icon,
                        iconLibrary: "FontAwesome",
                        className: "flex-shrink-0 text-sky-500 text-lg text-sky-500"
                    }), /*#__PURE__*/ React.createElement("li", {
                        className: "TEXT-CONTENT text-base font-medium text-slate-600 dark:text-slate-400"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `plans_${index}_features_${featureIndex}_text`
                    }, feature.text))))))))), /*#__PURE__*/ React.createElement(AnimateInView, {
                        type: "rise"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "flex flex-col items-center gap-4 text-center"
                    }, /*#__PURE__*/ React.createElement(EditableButton, {
                        className: "BTN-PRIMARY inline-flex items-center justify-center px-6 py-2 xl:py-3 text-sm sm:text-base 2xl:text-lg font-medium text-white bg-sky-500 rounded-lg focus:outline-none hover:bg-sky-400 transition-colors duration-500"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "buttonTextAttr"
                    }, buttonTextAttr)), /*#__PURE__*/ React.createElement("p", {
                        className: "DESC text-sm text-slate-700 dark:text-slate-400"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "buttonDescription"
                    }, buttonDescription))))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "VdpSuGoetUW-84Zd2hmTx"
                }, /*#__PURE__*/ React.createElement(Pricing_01, {
                    "title": "link=&target=_blank&text=UMKM%20LOGO%20DESIGN%20PACKAGES",
                    "description": "link=&target=_blank&text=Choose%20a%20plan%20that%20best%20suits%20your%20design%20needs%20and%20start%20transforming%20your%20ideas%20into%20reality.",
                    "plans": [{
                        "name": "Basic Design Package",
                        "price": "link=&target=_blank&text=350K",
                        "features": [{
                            "text": "link=&target=_blank&text=%3Cul%20data-sourcepos%3D%225%3A1-11%3A0%22%3E%3Cul%20style%3D%22margin-top%3A0cm%22%20type%3D%22disc%22%3E%0A%20%3Cul%20style%3D%22margin-top%3A0cm%22%20type%3D%22disc%22%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0A%20%20%20%20%20mso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%0A%20%20%20%20%20%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%20Concept%20from%20Client%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%3Cbr%3E%0A%20%20%20%20%20%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3Bmso-bidi-font-family%3A%0A%20%20%20%20%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%0A%20%20%20%20%202%20Revisions%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fli%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0A%20%20%20%20%20mso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%0A%20%20%20%20%20%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%20High%20Resolution%20Logo%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fli%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0A%20%20%20%20%20mso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%0A%20%20%20%20%20%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%20Delivery%20in%202-3%20days%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fli%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0A%20%20%20%20%20mso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%0A%20%20%20%20%20%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%20Receive%20jpg%2C%20png%20files%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%0A%20%3Cli%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%3Bmso-list%3Al0%20level1%20lfo1%3B%0A%20%20%20%20%20tab-stops%3Alist%2036.0pt%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2Afree%20mockup%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fli%3E%0A%3C%2Ful%3E%3C%2Ful%3E%3C%2Ful%3E%3Cdiv%20style%3D%22text-align%3A%20justify%3B%22%3E%3Cfont%20face%3D%22Times%20New%20Roman%2C%20serif%22%3E%3Cbr%3E%3C%2Ffont%3E%3C%2Fdiv%3E%3Cdiv%20style%3D%22text-align%3A%20justify%3B%22%3E%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%20%26nbsp%3B%3C%2Fdiv%3E%3Cdiv%20style%3D%22text-align%3A%20justify%3B%22%3E%3Cbr%3E%3C%2Fdiv%3E%3Cdiv%20style%3D%22text-align%3A%20justify%3B%22%3E%3Cbr%3E%3C%2Fdiv%3E%3Cdiv%20style%3D%22text-align%3A%20justify%3B%22%3E%3Cbr%3E%3C%2Fdiv%3E%3Cdiv%20style%3D%22text-align%3A%20justify%3B%22%3E%3Cbr%3E%3C%2Fdiv%3E"
                        }, {
                            "text": "link=&target=_blank&text="
                        }, {
                            "text": "link=&target=_blank&text="
                        }]
                    }, {
                        "name": "Premium Design Package",
                        "price": "link=&target=_blank&text=650K",
                        "features": [{
                            "text": "link=&target=_blank&text=%3Cul%20type%3D%22disc%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20margin-top%3A%200cm%3B%22%3E%3Cli%20class%3D%22MsoNormal%22%20style%3D%22--tw-border-spacing-x%3A%200%3B%20--tw-border-spacing-y%3A%200%3B%20--tw-translate-x%3A%200%3B%20--tw-translate-y%3A%200%3B%20--tw-rotate%3A%200%3B%20--tw-skew-x%3A%200%3B%20--tw-skew-y%3A%200%3B%20--tw-scale-x%3A%201%3B%20--tw-scale-y%3A%201%3B%20--tw-pan-x%3A%20%3B%20--tw-pan-y%3A%20%3B%20--tw-pinch-zoom%3A%20%3B%20--tw-scroll-snap-strictness%3A%20proximity%3B%20--tw-gradient-from-position%3A%20%3B%20--tw-gradient-via-position%3A%20%3B%20--tw-gradient-to-position%3A%20%3B%20--tw-ordinal%3A%20%3B%20--tw-slashed-zero%3A%20%3B%20--tw-numeric-figure%3A%20%3B%20--tw-numeric-spacing%3A%20%3B%20--tw-numeric-fraction%3A%20%3B%20--tw-ring-inset%3A%20%3B%20--tw-ring-offset-width%3A%200px%3B%20--tw-ring-offset-color%3A%20%23fff%3B%20--tw-ring-color%3A%20rgb%28147%20197%20253%20%2F%200.5%29%3B%20--tw-ring-offset-shadow%3A%200%200%20%230000%3B%20--tw-ring-shadow%3A%200%200%20%230000%3B%20--tw-shadow%3A%200%200%20%230000%3B%20--tw-shadow-colored%3A%200%200%20%230000%3B%20--tw-blur%3A%20%3B%20--tw-brightness%3A%20%3B%20--tw-contrast%3A%20%3B%20--tw-grayscale%3A%20%3B%20--tw-hue-rotate%3A%20%3B%20--tw-invert%3A%20%3B%20--tw-saturate%3A%20%3B%20--tw-sepia%3A%20%3B%20--tw-drop-shadow%3A%20%3B%20--tw-backdrop-blur%3A%20%3B%20--tw-backdrop-brightness%3A%20%3B%20--tw-backdrop-contrast%3A%20%3B%20--tw-backdrop-grayscale%3A%20%3B%20--tw-backdrop-hue-rotate%3A%20%3B%20--tw-backdrop-invert%3A%20%3B%20--tw-backdrop-opacity%3A%20%3B%20--tw-backdrop-saturate%3A%20%3B%20--tw-backdrop-sepia%3A%20%3B%20border-color%3A%20var%28--ai-create-color-theme-200%29%3B%20text-align%3A%20justify%3B%22%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3Bmso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%0A%3C%2Fspan%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3B%0Amso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3A%0Anone%3Bmso-fareast-language%3AEN-ID%22%3EConcept%20and%20design%20from%20our%20team%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3Bmso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3Bmso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%0A%3C%2Fspan%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3B%0Amso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3A%0Anone%3Bmso-fareast-language%3AEN-ID%22%3EGet%202%20Logo%20Options%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3A%0AEN-ID%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3Bmso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%0A%3C%2Fspan%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3B%0Amso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3A%0Anone%3Bmso-fareast-language%3AEN-ID%22%3E6%20Revisions%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3A%0AEN-ID%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3Bmso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%0A%3C%2Fspan%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3B%0Amso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3A%0Anone%3Bmso-fareast-language%3AEN-ID%22%3EHigh%20Resolution%20Logo%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3A%0AEN-ID%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3Bmso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%0A%3C%2Fspan%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3B%0Amso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3A%0Anone%3Bmso-fareast-language%3AEN-ID%22%3EDelivery%20in%204-6%20days%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bline-height%3A107%25%3Bfont-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A%0A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3AEN-ID%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%20%3C%2Fspan%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3B%0Aline-height%3A107%25%3Bfont-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3A%0AEN-ID%22%3EReceive%20jpg%2C%20png%2C%20pdf%20files%20%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bline-height%3A107%25%3Bfont-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A%0A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3AEN-ID%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2AFile%20Ai%2FEps%20%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bline-height%3A107%25%3Bfont-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A%0A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3AEN-ID%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2ALogo%20mockup%20%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22margin-bottom%3A0cm%3Bline-height%3Anormal%22%3E%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bline-height%3A107%25%3Bfont-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A%0A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3AEN-ID%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2ABusiness%20Card%20design%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3C%2Fli%3E%3C%2Ful%3E%3Cdiv%20style%3D%22text-align%3A%20justify%3B%22%3E%3Cfont%20face%3D%22Times%20New%20Roman%2C%20serif%22%3E%3Cbr%3E%3C%2Ffont%3E%3C%2Fdiv%3E%3Cdiv%20style%3D%22text-align%3A%20justify%3B%22%3E%3Cfont%20face%3D%22Times%20New%20Roman%2C%20serif%22%3E%3Cbr%3E%3C%2Ffont%3E%3C%2Fdiv%3E%3Cdiv%20style%3D%22text-align%3A%20justify%3B%22%3E%3Cfont%20face%3D%22Times%20New%20Roman%2C%20serif%22%3E%3Cbr%3E%3C%2Ffont%3E%3C%2Fdiv%3E%3Cdiv%20style%3D%22text-align%3A%20justify%3B%22%3E%3Cfont%20face%3D%22Times%20New%20Roman%2C%20serif%22%3E%3Cbr%3E%3C%2Ffont%3E%3C%2Fdiv%3E"
                        }, {}, {}]
                    }, {
                        "name": "Ultimate Design Package",
                        "price": "link=&target=_blank&text=1.000K",
                        "features": [{
                            "text": "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%0AConcept%20and%20design%20from%20our%20team%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%0AGet%203%20Logo%20Options%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%0AUnlimited%20Revisions%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%0AHigh%20Resolution%20Logo%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%0ADelivery%20in%203-4%20weeks%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%0AReceive%20jpg%2C%20png%2C%20pdf%20files%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2AFile%20Ai%2FEps%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2ALogo%20mockup%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2ALogo%20concept%20proposal%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2A3%20IG%20Feeds%20or%20packaging%20design%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%0A%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2ABusiness%20Card%20design%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E"
                        }, {
                            "text": "link=&target=_blank&text="
                        }, {
                            "text": "link=&target=_blank&text="
                        }]
                    }],
                    "icon": "fa-solid fa-check",
                    "buttonTextAttr": "link=https%3A%2F%2Fwa.me%2F085157332251%3Ftext%3DHallo%2520Depressedesign%2C%2520I%2520need%2520UMKM%2520logo%2520design&target=_blank&text=Contact%20Us",
                    "buttonDescription": "Start your design journey with us today!",
                    key: "VdpSuGoetUW-84Zd2hmTx"
                })));
            } catch (error) {}
        } {
            try {
                function Pricing_06({
                    title = "link=&target=_blank&text=Discover%20the%20company%20exclusive%20design%20package",
                    subtitle = "link=&target=_blank&text=company%20design",
                    price = "link=&target=_blank&text=3.225K",
                    features = [{
                        "content": "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%20%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3EConcept%0Aand%20Design%20from%20Our%20Team%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%20%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3EReceive%0A3%20Logo%20Options%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%20%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3EUnlimited%0ARevisions%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%20%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3EHigh-Resolution%0ALogo%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%20%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3EDelivery%0Ain%203-4%20Weeks%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%20%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3EReceive%0AJPG%2C%20PNG%20Files%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2APDF%20File%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2AAI%2FEPS%20File%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2ALogo%20Mockup%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2AStationery%20Kit%20Mockup%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2ABusiness%20Card%20Design%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2ALetterhead%20Design%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2AEnvelope%20Design%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2ALogo%20Concept%20Proposal%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2A100%25%20Approval%20Guarantee%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E"
                    }, {}, {}, {}, {}],
                    testimonialText = "Depressedesign transformed our vision into reality with their minimalist yet impactful design approach. Our brand's online presence has never been more compelling.",
                    testimonialAuthor = "Jordan Lee",
                    testimonialRole = "Creative Director",
                    testimonialImageUrl = "https://images.unsplash.com/photo-1518611540400-6b85a0704342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjg5NjEwNjV8&ixlib=rb-4.0.3&q=80&h=840",
                    guaranteeText = "30-Day Satisfaction Guarantee",
                    iconStar = "fa-solid fa-star",
                    buttonAttr = "text=Explore Our Portfolio&link=/portfolio",
                    listIcon = "fa-solid fa-check",
                    guaranteeIcon = "fa-solid fa-lock"
                }) {
                    return /*#__PURE__*/ React.createElement("section", {
                        className: "py-10 bg-white dark:bg-slate-800",
                        "data-id": "R10w2VQ-43neGonmSiBLx"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "max-w-7xl mx-auto py-10 px-4 grid grid-cols-1 gap-16 md:grid-cols-2 md:items-stretch"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "flex flex-col gap-16 justify-between"
                    }, /*#__PURE__*/ React.createElement(AnimateInView, {
                        type: "rise"
                    }, /*#__PURE__*/ React.createElement("h2", {
                        className: "TITLE-PRIMARY text-5xl font-semibold text-slate-900 dark:text-white"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "title"
                    }, title))), /*#__PURE__*/ React.createElement(AnimateInView, {
                        type: "rise"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "flex flex-col gap-8"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "flex items-center gap-2"
                    }, [...Array(5)].map((_, index) => /*#__PURE__*/ React.createElement(EditableIcon, {
                        key: index,
                        propKey: `iconStar`,
                        icon: iconStar,
                        iconLibrary: "FontAwesome",
                        className: "text-yellow-400 text-lg"
                    }))), /*#__PURE__*/ React.createElement("p", {
                        className: "DESC text-base font-normal text-slate-600 dark:text-slate-400"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "testimonialText"
                    }, testimonialText)), /*#__PURE__*/ React.createElement("div", {
                        className: "flex items-center gap-4"
                    }, /*#__PURE__*/ React.createElement(EditableImg, {
                        propKey: "testimonialImageUrl",
                        className: "IMAGE rounded-full bg-slate-100 w-14 h-14 aspect-[1/1] object-cover",
                        src: testimonialImageUrl,
                        alt: testimonialImageUrl
                    }), /*#__PURE__*/ React.createElement("div", {
                        className: "flex flex-col gap-1"
                    }, /*#__PURE__*/ React.createElement("p", {
                        className: "TITLE-SECONDARY text-lg font-semibold text-slate-900 dark:text-slate-50"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "testimonialAuthor"
                    }, testimonialAuthor)), /*#__PURE__*/ React.createElement("p", {
                        className: "DESC text-sm text-slate-600 dark:text-slate-400"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "testimonialRole"
                    }, testimonialRole))))))), /*#__PURE__*/ React.createElement(AnimateInView, {
                        type: "rise"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "p-10 flex flex-col gap-12 bg-white border border-black/10 dark:border-white/10 dark:bg-slate-700 rounded-lg"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "flex flex-col gap-4"
                    }, /*#__PURE__*/ React.createElement("h3", {
                        className: "TITLE-SECONDARY text-xs font-semibold text-sky-500 uppercase"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "subtitle"
                    }, subtitle)), /*#__PURE__*/ React.createElement("p", {
                        className: "TITLE-PRIMARY text-6xl font-bold text-slate-900 dark:text-white"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "price"
                    }, price))), /*#__PURE__*/ React.createElement("ul", {
                        className: "flex flex-col space-y-4"
                    }, features.map((feature, index) => /*#__PURE__*/ React.createElement("li", {
                        key: index,
                        className: "inline-flex items-center gap-3"
                    }, /*#__PURE__*/ React.createElement(EditableIcon, {
                        propKey: `features_${index}_icon`,
                        icon: feature.icon,
                        iconLibrary: "FontAwesome",
                        className: "text-sky-500 text-lg"
                    }), /*#__PURE__*/ React.createElement("span", {
                        className: "TEXT-CONTENT text-base font-medium text-slate-900 dark:text-slate-50"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `features_${index}_content`
                    }, feature.content))))), /*#__PURE__*/ React.createElement("div", {
                        className: "flex flex-col gap-5"
                    }, /*#__PURE__*/ React.createElement(EditableButton, {
                        className: "BTN-PRIMARY w-full inline-flex items-center justify-center text-white bg-sky-500 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "buttonAttr"
                    }, buttonAttr)), /*#__PURE__*/ React.createElement("div", {
                        className: "flex items-center gap-2"
                    }, /*#__PURE__*/ React.createElement(EditableIcon, {
                        propKey: "guaranteeIcon",
                        icon: guaranteeIcon,
                        iconLibrary: "FontAwesome",
                        className: "text-slate-600 dark:text-slate-400"
                    }), /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "guaranteeText",
                        className: "DESC text-sm text-slate-600 dark:text-slate-400"
                    }, guaranteeText)))))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "R10w2VQ-43neGonmSiBLx"
                }, /*#__PURE__*/ React.createElement(Pricing_06, {
                    "title": "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%3E%3Cb%3E%3Cspan%20style%3D%22font-size%3A26.0pt%3Bline-height%3A107%25%22%3ECOMPANY%26nbsp%3B%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fb%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%3E%3Cb%20style%3D%22color%3A%20rgb%2815%2023%2042%20%2F%20var%28--tw-text-opacity%29%29%3B%20font-family%3A%20var%28--custom-heading-font%29%3B%20font-size%3A%203rem%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%22%3E%3Cspan%20style%3D%22font-size%3A26.0pt%3Bline-height%3A107%25%22%3ELOGO%26nbsp%3BDESIGN%3C%2Fspan%3E%3C%2Fb%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%3E%3Cspan%20style%3D%22color%3A%20rgb%2871%2C%2085%2C%20105%29%3B%20font-family%3A%20Lato%2C%20ui-sans-serif%2C%20system-ui%2C%20-apple-system%2C%20blinkmacsystemfont%2C%20%26quot%3BSegoe%20UI%26quot%3B%2C%20roboto%2C%20%26quot%3BHelvetica%20Neue%26quot%3B%2C%20arial%2C%20%26quot%3BNoto%20Sans%26quot%3B%2C%20sans-serif%2C%20%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%20%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20%26quot%3BNoto%20Color%20Emoji%26quot%3B%3B%20font-size%3A%2016px%3B%20font-weight%3A%20400%3B%20text-align%3A%20center%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%22%3EA%20unique%20and%20authentic%20company%20logo%20is%20a%20valuable%20asset%20that%20can%20significantly%20benefit%20your%20business.%20It%20helps%20build%20a%20strong%20brand%20identity%2C%20fosters%20customer%20loyalty%2C%20and%20drives%20long-term%20success.%3C%2Fspan%3E%3C%2Fp%3E",
                    "subtitle": "link=&target=_blank&text=company%20design%20PACKAGE",
                    "price": "link=&target=_blank&text=3.225K",
                    "features": [{
                        "content": "link=&target=_blank&text=%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%20%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3EConcept%0Aand%20Design%20from%20Our%20Team%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%20%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%20sans-serif%3B%22%3E%E2%9C%A6%26nbsp%3B%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%20%26quot%3BTimes%20New%20Roman%26quot%3B%2C%20serif%3B%20font-size%3A%2012pt%3B%20color%3A%20rgb%2815%2023%2042%20%2F%20var%28--tw-text-opacity%29%29%3B%20background-color%3A%20rgb%28255%20255%20255%20%2F%20var%28--tw-bg-opacity%29%29%3B%22%3EOriginal%20Logo%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%3Cbr%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%3E%3Cspan%20style%3D%22font-size%3A12.0pt%3Bline-height%3A107%25%3Bfont-family%3A%0A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%3Bmso-fareast-font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%3Bmso-font-kerning%3A%0A0pt%3Bmso-ligatures%3Anone%3Bmso-fareast-language%3AEN-ID%22%3E%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%3Cbr%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%20%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3EReceive%0A3%20Logo%20Options%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%20%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3EUnlimited%0ARevisions%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%20%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3EHigh-Resolution%0ALogo%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%20%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3EDelivery%0Ain%203-4%20Weeks%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2Csans-serif%3B%0Amso-bidi-font-family%3A%26quot%3BSegoe%20UI%20Symbol%26quot%3B%22%3E%E2%9C%A6%20%3C%2Fspan%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3EReceive%0AJPG%2C%20PNG%20Files%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2APDF%20File%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2AAI%2FEPS%20File%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2ALogo%20Mockup%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2AStationery%20Kit%20Mockup%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2ABusiness%20Card%20Design%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2ALetterhead%20Design%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2AEnvelope%20Design%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2ALogo%20Concept%20Proposal%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E%0A%0A%3Cp%20class%3D%22MsoNormal%22%20style%3D%22text-align%3Ajustify%22%3E%3Cspan%20style%3D%22font-family%3A%26quot%3BTimes%20New%20Roman%26quot%3B%2Cserif%22%3E%26nbsp%3B%26nbsp%3B%26nbsp%3B%26nbsp%3B%20%2A100%25%20Approval%20Guarantee%3Co%3Ap%3E%3C%2Fo%3Ap%3E%3C%2Fspan%3E%3C%2Fp%3E"
                    }, {}, {}, {}, {}],
                    "testimonialText": "Depressedesign transformed our vision into reality with their minimalist yet impactful design approach. Our brand's online presence has never been more compelling.",
                    "testimonialAuthor": "link=&target=_blank&text=HAN",
                    "testimonialRole": "link=&target=_blank&text=Creative%20Director",
                    "testimonialImageUrl": "https://images.unsplash.com/photo-1546002879-d9050349b34c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHNlYXJjaHwyOXx8QiUyNld8ZW58MHx8fHwxNzI4OTc3NDY0fDA&ixlib=rb-4.0.3&q=80&w=1080",
                    "guaranteeText": "link=&target=_blank&text=Priority%20support",
                    "iconStar": "fa-solid fa-star",
                    "buttonAttr": "link=https%3A%2F%2Fwa.me%2F085157332251%3Ftext%3DHallo%2520Depressedesign%21%2520i%2520company%2520logo%2520design.&target=_blank&text=Contact%20us",
                    "listIcon": "fa-solid fa-check",
                    "guaranteeIcon": "icon=fa-solid%20fa-star&link=&target=_blank",
                    key: "R10w2VQ-43neGonmSiBLx"
                })));
            } catch (error) {}
        } {
            try {
                function Steps_01({
                    title = `How Our Design Studio Creates Success`,
                    description = `Our process is meticulously crafted to deliver top-notch designs that stand out in the digital landscape.`,
                    steps = [{
                        title: `Sign Up for Free`,
                        description: `Begin your journey with us by signing up for a free account. Experience design freedom like never before.`,
                        icon: `fa-solid fa-user-plus`
                    }, {
                        title: `Craft Your Masterpiece`,
                        description: `Utilize our cutting-edge tools to build a website that captures your unique brand identity.`,
                        icon: `fa-solid fa-paint-brush`
                    }, {
                        title: `Launch with Confidence`,
                        description: `Go live with your project and make a powerful impact in the market. We've got your back every step of the way.`,
                        icon: `fa-solid fa-rocket`
                    }]
                }) {
                    return /*#__PURE__*/ React.createElement("section", {
                        className: "py-10 bg-slate-50 dark:bg-slate-800",
                        "data-id": "qcZDbatTRSREeDs_pr9aE"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "px-4 mx-auto max-w-7xl py-10 flex flex-col gap-16"
                    }, /*#__PURE__*/ React.createElement(AnimateInView, {
                        type: "rise"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "max-w-3xl mx-auto text-center flex flex-col gap-6"
                    }, /*#__PURE__*/ React.createElement("h2", {
                        className: "TITLE-PRIMARY text-4xl font-semibold text-slate-900 dark:text-white/90"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "title"
                    }, title)), /*#__PURE__*/ React.createElement("p", {
                        className: "DESC max-w-lg mx-auto text-base font-normal text-slate-600 dark:text-white/70"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "description"
                    }, description)))), /*#__PURE__*/ React.createElement(AnimateInView, {
                        type: "rise"
                    }, /*#__PURE__*/ React.createElement("ul", {
                        className: "max-w-md mx-auto space-y-12"
                    }, steps.map((step, index) => /*#__PURE__*/ React.createElement("li", {
                        key: index,
                        className: "relative flex items-start"
                    }, index < steps.length - 1 && /*#__PURE__*/ React.createElement("div", {
                        className: "-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-black/10 dark:border-white/10 h-full",
                        "aria-hidden": "true"
                    }), /*#__PURE__*/ React.createElement("div", {
                        className: "relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white border border-black/10 dark:border-white/10  dark:bg-slate-700 rounded-full"
                    }, /*#__PURE__*/ React.createElement(EditableIcon, {
                        propKey: `steps_${index}_icon`,
                        icon: step.icon,
                        iconLibrary: "FontAwesome",
                        className: "text-sky-500 text-lg"
                    })), /*#__PURE__*/ React.createElement("div", {
                        className: "ml-6"
                    }, /*#__PURE__*/ React.createElement("h3", {
                        className: "TITLE-SECONDARY text-lg font-semibold text-slate-900 dark:text-white/90"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `steps_${index}_title`
                    }, step.title)), /*#__PURE__*/ React.createElement("p", {
                        className: "TEXT-CONTENT mt-4 text-base font-normal text-slate-600 dark:text-white/70"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `steps_${index}_description`
                    }, step.description)))))))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "qcZDbatTRSREeDs_pr9aE"
                }, /*#__PURE__*/ React.createElement(Steps_01, {
                    "title": "Our Design Process",
                    "description": "Experience a seamless design process that turns your vision into reality.",
                    "steps": [{
                        "title": "Consultation",
                        "description": "Discuss your ideas and goals with our expert team.",
                        "icon": "fa-solid fa-comments"
                    }, {
                        "title": "Design Development",
                        "description": "link=&target=_blank&text=We%20create%20detailed%20designs%20tailored%20to%20your%20needs%20%26amp%3B%20revision%26nbsp%3BIf%20desired",
                        "icon": "icon=fa-solid%20fa-wand-magic-sparkles&link=&target=_blank"
                    }, {
                        "title": "Final Delivery",
                        "description": "Receive your completed design, ready to make an impact.",
                        "icon": "fa-solid fa-rocket"
                    }],
                    key: "qcZDbatTRSREeDs_pr9aE"
                })));
            } catch (error) {}
        } {
            try {
                function FAQ_07({
                    title = 'Design Studio FAQs',
                    faqs = [{
                        question: 'Why choose our design studio?',
                        answer: 'Our commitment to innovative design and exceptional craftsmanship ensures unique solutions tailored to your needs.',
                        icon: 'fa-solid fa-plus'
                    }, {
                        question: 'What services do we offer?',
                        answer: 'From branding and web design to interior spaces, we provide a wide range of services to bring your vision to life.',
                        icon: 'fa-solid fa-plus'
                    }, {
                        question: 'How does our design process work?',
                        answer: 'We collaborate closely with our clients through a series of workshops and revisions to ensure the final product exceeds expectations.',
                        icon: 'fa-solid fa-plus'
                    }]
                }) {
                    const [openIndex, setOpenIndex] = React.useState(null);
                    const toggleIndex = index => {
                        setOpenIndex(openIndex === index ? null : index);
                    };
                    return /*#__PURE__*/ React.createElement("div", {
                        className: "bg-white dark:bg-slate-800",
                        "data-id": "EiBoP6sW--asZrY8oC6dA"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "w-full max-w-7xl mx-auto py-10 px-4 lg:py-20"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "mx-auto max-w-4xl divide-y divide-black/10 dark:divide-white/10"
                    }, /*#__PURE__*/ React.createElement("h2", {
                        className: "TITLE-PRIMARY text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white/80"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "title"
                    }, title)), /*#__PURE__*/ React.createElement("dl", {
                        className: "mt-10 space-y-6 divide-y divide-black/10 dark:divide-white/10"
                    }, faqs.map((faq, index) => /*#__PURE__*/ React.createElement("div", {
                        key: index,
                        className: "pt-6"
                    }, /*#__PURE__*/ React.createElement("dt", null, /*#__PURE__*/ React.createElement("button", {
                        className: "flex w-full items-start justify-between text-left",
                        onClick: () => toggleIndex(index)
                    }, /*#__PURE__*/ React.createElement("span", {
                        className: "TITLE-SECONDARY text-lg font-semibold text-slate-900 dark:text-white/80"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `faqs_${index}_question`
                    }, faq.question)), /*#__PURE__*/ React.createElement("span", {
                        className: "ml-6 flex h-7 items-center"
                    }, /*#__PURE__*/ React.createElement(EditableIcon, {
                        propKey: `faqs_${index}_icon`,
                        icon: faq.icon,
                        iconLibrary: "FontAwesome",
                        className: "text-lg text-slate-900 dark:text-white/80"
                    })))), openIndex === index && /*#__PURE__*/ React.createElement("dd", {
                        className: "mt-2 pr-12"
                    }, /*#__PURE__*/ React.createElement("p", {
                        className: "TEXT-CONTENT text-base leading-7 text-slate-700 dark:text-white/80"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: `faqs_${index}_answer`
                    }, faq.answer)))))))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "EiBoP6sW--asZrY8oC6dA"
                }, /*#__PURE__*/ React.createElement(FAQ_07, {
                    "title": "Frequently Asked Questions",
                    "faqs": [{
                        "question": "What makes Depressedesign unique?",
                        "answer": "Our minimalist approach combined with high-quality craftsmanship ensures your brand stands out.",
                        "icon": "fa-solid fa-plus"
                    }, {
                        "question": "What services do you offer?",
                        "answer": "We offer a wide range of design services, including branding, web design, and interior design.",
                        "icon": "fa-solid fa-plus"
                    }, {
                        "question": "How do I start a project?",
                        "answer": "Contact us to discuss your vision, and we'll guide you through the process from start to finish.",
                        "icon": "fa-solid fa-plus"
                    }],
                    key: "EiBoP6sW--asZrY8oC6dA"
                })));
            } catch (error) {}
        } {
            try {
                function CallToAction_12({
                    title = `Ready to elevate your brand?`,
                    subTitle = `Join us and start your journey today.`,
                    buttonPrimaryLabel = `Get Started`,
                    buttonSecondaryLabel = `Learn More`,
                    buttonSecondaryIcon = 'fa-solid fa-arrow-right'
                }) {
                    return /*#__PURE__*/ React.createElement("div", {
                        className: "bg-white dark:bg-slate-900",
                        "data-id": "HiVVb82f0APOxwk-dTGTq"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "w-full max-w-7xl mx-auto py-20 px-4"
                    }, /*#__PURE__*/ React.createElement("div", {
                        className: "flex flex-col items-center md:flex-row md:justify-between"
                    }, /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h2", {
                        className: "TITLE-PRIMARY text-4xl font-extrabold text-slate-900 dark:text-white/90"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "title"
                    }, title)), /*#__PURE__*/ React.createElement("p", {
                        className: "TITLE-SECONDARY mt-4 text-base font-normal text-slate-700 dark:text-white/70"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "subTitle"
                    }, subTitle))), /*#__PURE__*/ React.createElement("div", {
                        className: "mt-10 md:mt-0 flex gap-4"
                    }, /*#__PURE__*/ React.createElement(EditableButton, {
                        className: "BTN-PRIMARY inline-flex items-center justify-center text-white bg-sky-500 font-medium border-0 py-2 xl:py-3 px-6 focus:outline-none hover:bg-sky-400 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "buttonPrimaryLabel"
                    }, buttonPrimaryLabel)), /*#__PURE__*/ React.createElement(EditableButton, {
                        className: "BTN-SECONDARY inline-flex gap-1 group items-center justify-center text-slate-900 bg-white font-medium border border-black/10 dark:border-white/10 py-2 xl:py-3 px-6 focus:outline-none hover:bg-slate-100 rounded-lg text-sm sm:text-base 2xl:text-lg transition-colors duration-500 dark:hover:bg-slate-600 dark:bg-slate-800 dark:text-white"
                    }, /*#__PURE__*/ React.createElement(EditableText, {
                        propKey: "buttonSecondaryLabel"
                    }, buttonSecondaryLabel), /*#__PURE__*/ React.createElement(EditableIcon, {
                        propKey: "buttonSecondaryIcon",
                        icon: buttonSecondaryIcon,
                        className: "group-hover:translate-x-1 transition-all duration-300"
                    }))))));
                }
                list.push( /*#__PURE__*/ React.createElement(ErrorBoundary, {
                    key: "HiVVb82f0APOxwk-dTGTq"
                }, /*#__PURE__*/ React.createElement(CallToAction_12, {
                    "title": "Transform Your Vision with Us",
                    "subTitle": "Join Depressedesign and embark on a journey of creativity and innovation.",
                    "buttonPrimaryLabel": "link=https%3A%2F%2Fwa.me%2F085157332251%3Ftext%3DHallo%2520Depressedesign%21%2520i%2520need%2520design.&target=_blank&text=Let%27s%20chat%2C%20it%27s%20on%20us%21",
                    "buttonSecondaryLabel": "link=https%3A%2F%2Fwww.instagram.com%2Fdepressedesign%2F&target=_blank&text=Follow%20us",
                    "buttonSecondaryIcon": "fa-solid fa-arrow-right",
                    "buttonPrimaryAttr": "text=Get Started&link=portfolio",
                    "buttonSecondaryAttr": "text=Learn More&link=home",
                    key: "HiVVb82f0APOxwk-dTGTq"
                })));
            } catch (error) {}
        }
        routerList.push({
            path: "pricelist",
            element: /*#__PURE__*/ React.createElement(Layout, null, list)
        });
    }
    try {
        function Footer_08({
            companyCopyright = "© 2023 Design Studio Works",
            links = [{
                textAttr: "text=About Us&link=/"
            }, {
                textAttr: "text=Our Services&link=/"
            }, {
                textAttr: "text=Privacy Policy&link=/"
            }, {
                textAttr: "text=Terms Conditions&link=/"
            }, {
                textAttr: "text=Support&link=/"
            }],
            socialIcons = [{
                icon: "fa-brands fa-twitter",
                href: "#"
            }, {
                icon: "fa-brands fa-facebook-f",
                href: "#"
            }, {
                icon: "fa-brands fa-instagram",
                href: "#"
            }]
        }) {
            return /*#__PURE__*/ React.createElement("section", {
                className: "py-10 bg-black",
                "data-id": "Mv2a4gGHAeqheBJFz9FdB"
            }, /*#__PURE__*/ React.createElement(AnimateInView, {
                type: "rise"
            }, /*#__PURE__*/ React.createElement("div", {
                className: "mx-auto px-4 max-w-7xl py-10 flex flex-col items-center gap-12"
            }, /*#__PURE__*/ React.createElement(EditableText, {
                propKey: "companyCopyright",
                className: "DESC ml-2  text-sm text-white/60"
            }, companyCopyright), /*#__PURE__*/ React.createElement("div", {
                className: "flex flex-col gap-8 items-center md:flex-row"
            }, /*#__PURE__*/ React.createElement("ul", {
                className: "flex flex-col items-center gap-8 sm:flex-row"
            }, links.map((link, index) => /*#__PURE__*/ React.createElement("li", {
                key: index
            }, /*#__PURE__*/ React.createElement(EditableButton, {
                className: "TEXT-LINK text-sm text-white hover:text-sky-500 focus:text-sky-500  dark:hover:text-sky-500 dark:focus:text-sky-500"
            }, /*#__PURE__*/ React.createElement(EditableText, {
                propKey: `links_${index}_textAttr`
            }, link.textAttr))))), /*#__PURE__*/ React.createElement("div", {
                className: "w-full h-px bg-white/20 dark:bg-white/10 md:w-px md:h-6"
            }), /*#__PURE__*/ React.createElement("ul", {
                className: "flex items-center gap-8"
            }, socialIcons.map((icon, index) => /*#__PURE__*/ React.createElement("li", {
                key: index,
                href: icon.href
            }, /*#__PURE__*/ React.createElement(EditableButton, {
                className: "TEXT-LINK text-white"
            }, /*#__PURE__*/ React.createElement(EditableIcon, {
                propKey: `socialIcons_${index}_icon`,
                icon: icon.icon,
                iconLibrary: "FontAwesome",
                className: "text-lg  hover:text-sky-500 focus:text-sky-500 dark:hover:text-sky-500 dark:focus:text-sky-500"
            })))))))));
        }
        Footer_1845986629060902913 = /*#__PURE__*/ React.createElement(ErrorBoundary, {
            key: "Mv2a4gGHAeqheBJFz9FdB"
        }, /*#__PURE__*/ React.createElement(Footer_08, {
            "companyCopyright": "© 2024 Depressedesign. Crafting elegance in every pixel.",
            "links": [{
                "textAttr": "text=About Us&link=/home"
            }, {
                "textAttr": "text=Our Portfolio&link=/portfolio"
            }, {
                "textAttr": "text=Pricing Details&link=/pricelist"
            }, {
                "textAttr": "text=Privacy Policy&link=/"
            }, {
                "textAttr": "text=Terms & Conditions&link=/"
            }, {
                "textAttr": "text=Contact Us&link=/home"
            }],
            "socialIcons": [{
                "icon": "icon=fa-brands%20fa-whatsapp&link=https%3A%2F%2Fwa.me%2F085157332251%3Ftext%3DHallo%2520Depressedesign%21%2520i%2520need%2520design.&target=_blank",
                "href": "https://twitter.com/Depressedesign"
            }, {
                "icon": "icon=fa-brands%20fa-tiktok&link=https%3A%2F%2Fwww.tiktok.com%2F%40panca_han&target=_blank",
                "href": "https://facebook.com/Depressedesign"
            }, {
                "icon": "icon=fa-brands%20fa-instagram&link=https%3A%2F%2Fwww.instagram.com%2Fdepressedesign%2F&target=_blank",
                "href": "https://instagram.com/Depressedesign"
            }],
            key: "Mv2a4gGHAeqheBJFz9FdB"
        }));
    } catch (error) {}
    if (defaultRouter && defaultRouter !== "/") {
        const defaultRouterItem = routerList.find(item => {
            if (item.path === defaultRouter) {
                return item;
            }
        });
        routerList.unshift({
            path: '/',
            element: defaultRouterItem.element
        });
    }
    const router = createBrowserRouter(routerList);
    createRoot(document.getElementById('root')).render( /*#__PURE__*/ React.createElement(RouterProvider, {
        router: router
    }));
}
render();