"use strict";
var __defProp = Object.defineProperty;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __assign = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
Object.defineProperty(exports, "__esModule", {value: true});
exports[Symbol.toStringTag] = "Module";
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var reactRouterDom = require("react-router-dom");
var react = require("@headlessui/react");
var outline = require("@heroicons/react/outline");
var solid = require("@heroicons/react/solid");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : {default: e};
}
var React__default = /* @__PURE__ */ _interopDefaultLegacy(React);
var ReactDOMServer__default = /* @__PURE__ */ _interopDefaultLegacy(ReactDOMServer);
function About() {
  return /* @__PURE__ */ React__default["default"].createElement("h1", null, "About");
}
var __glob_3_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: About
});
const navigation = [
  {name: "Changelog", href: "#"},
  {name: "About", href: "#"},
  {name: "Partners", href: "#"},
  {name: "News", href: "#"}
];
const offices = [
  {
    id: 1,
    city: "Los Angeles",
    address: ["4556 Brendan Ferry", "Los Angeles, CA 90210"]
  },
  {
    id: 2,
    city: "New York",
    address: ["886 Walter Streets", "New York, NY 12345"]
  },
  {
    id: 3,
    city: "Toronto",
    address: ["7363 Cynthia Pass", "Toronto, ON N3Y 4H8"]
  },
  {id: 4, city: "London", address: ["114 Cobble Lane", "London N1 2EF"]}
];
const footerNavigation$1 = {
  solutions: [
    {name: "Marketing", href: "#"},
    {name: "Analytics", href: "#"},
    {name: "Commerce", href: "#"},
    {name: "Insights", href: "#"}
  ],
  support: [
    {name: "Pricing", href: "#"},
    {name: "Documentation", href: "#"},
    {name: "Guides", href: "#"},
    {name: "API Status", href: "#"}
  ],
  company: [
    {name: "About", href: "#"},
    {name: "Blog", href: "#"},
    {name: "Jobs", href: "#"},
    {name: "Press", href: "#"},
    {name: "Partners", href: "#"}
  ],
  legal: [
    {name: "Claim", href: "#"},
    {name: "Privacy", href: "#"},
    {name: "Terms", href: "#"}
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => /* @__PURE__ */ React__default["default"].createElement("svg", __assign({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /* @__PURE__ */ React__default["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
        clipRule: "evenodd"
      }))
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => /* @__PURE__ */ React__default["default"].createElement("svg", __assign({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /* @__PURE__ */ React__default["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
        clipRule: "evenodd"
      }))
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => /* @__PURE__ */ React__default["default"].createElement("svg", __assign({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /* @__PURE__ */ React__default["default"].createElement("path", {
        d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
      }))
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => /* @__PURE__ */ React__default["default"].createElement("svg", __assign({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /* @__PURE__ */ React__default["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
        clipRule: "evenodd"
      }))
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (props) => /* @__PURE__ */ React__default["default"].createElement("svg", __assign({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /* @__PURE__ */ React__default["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
        clipRule: "evenodd"
      }))
    }
  ]
};
function Contact() {
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "min-h-screen bg-white"
  }, /* @__PURE__ */ React__default["default"].createElement(react.Popover, {
    as: "header",
    className: "relative"
  }, ({open}) => /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "bg-warm-gray-50"
  }, /* @__PURE__ */ React__default["default"].createElement("nav", {
    className: "relative max-w-7xl mx-auto flex items-center justify-between pt-6 px-6 xl:px-8",
    "aria-label": "Global"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex items-center flex-1"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex items-center justify-between w-full lg:w-auto"
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Workflow"), /* @__PURE__ */ React__default["default"].createElement("img", {
    className: "h-8 w-auto sm:h-10",
    src: "https://tailwindui.com/img/logos/workflow-mark.svg?color=teal&shade=500",
    alt: ""
  })), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "-mr-2 flex items-center lg:hidden"
  }, /* @__PURE__ */ React__default["default"].createElement(react.Popover.Button, {
    className: "bg-warm-gray-50 rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-teal-500"
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Open main menu"), /* @__PURE__ */ React__default["default"].createElement(outline.MenuIcon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "hidden space-x-10 lg:flex lg:ml-10"
  }, navigation.map((item) => /* @__PURE__ */ React__default["default"].createElement("a", {
    key: item.name,
    href: item.href,
    className: "text-base font-medium text-warm-gray-500 hover:text-warm-gray-900"
  }, item.name)))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "hidden lg:flex lg:items-center lg:space-x-6"
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#",
    className: "py-2 px-6 bg-warm-gray-100 border border-transparent rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-200"
  }, "Login")))), /* @__PURE__ */ React__default["default"].createElement(react.Transition, {
    show: open,
    as: React.Fragment,
    enter: "duration-150 ease-out",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "duration-100 ease-in",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95"
  }, /* @__PURE__ */ React__default["default"].createElement(react.Popover.Panel, {
    focus: true,
    static: true,
    className: "absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top lg:hidden"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "px-5 pt-4 flex items-center justify-between"
  }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("img", {
    className: "h-8 w-auto",
    src: "https://tailwindui.com/img/logos/workflow-mark.svg?color=teal&shade=500",
    alt: ""
  })), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "-mr-2"
  }, /* @__PURE__ */ React__default["default"].createElement(react.Popover.Button, {
    className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Close menu"), /* @__PURE__ */ React__default["default"].createElement(outline.XIcon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "pt-5 pb-6"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "px-2 space-y-1"
  }, navigation.map((item) => /* @__PURE__ */ React__default["default"].createElement("a", {
    key: item.name,
    href: item.href,
    className: "block px-3 py-2 rounded-md text-base font-medium text-warm-gray-900 hover:bg-warm-gray-50"
  }, item.name))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-6 px-5"
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#",
    className: "block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-teal-500 text-white font-medium hover:bg-teal-600"
  }, "Login")))))))), /* @__PURE__ */ React__default["default"].createElement("main", {
    className: "overflow-hidden"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "bg-warm-gray-50"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "py-24 lg:py-32"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React__default["default"].createElement("h1", {
    className: "text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl"
  }, "Get in touch"), /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "mt-6 text-xl text-warm-gray-500 max-w-3xl"
  }, "Vel nunc non ut montes, viverra tempor. Proin lectus nibh phasellus morbi non morbi. In elementum urna ut volutpat. Sagittis et vel et fermentum amet consequat.")))), /* @__PURE__ */ React__default["default"].createElement("section", {
    className: "relative bg-white",
    "aria-labelledby": "contactHeading"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "absolute w-full h-1/2 bg-warm-gray-50",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React__default["default"].createElement("svg", {
    className: "absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72",
    width: 404,
    height: 384,
    fill: "none",
    viewBox: "0 0 404 384",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React__default["default"].createElement("defs", null, /* @__PURE__ */ React__default["default"].createElement("pattern", {
    id: "64e643ad-2176-4f86-b3d7-f2c5da3b6a6d",
    x: 0,
    y: 0,
    width: 20,
    height: 20,
    patternUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React__default["default"].createElement("rect", {
    x: 0,
    y: 0,
    width: 4,
    height: 4,
    className: "text-warm-gray-200",
    fill: "currentColor"
  }))), /* @__PURE__ */ React__default["default"].createElement("rect", {
    width: 404,
    height: 384,
    fill: "url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
  }))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "relative bg-white shadow-xl"
  }, /* @__PURE__ */ React__default["default"].createElement("h2", {
    id: "contactHeading",
    className: "sr-only"
  }, "Contact us"), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "relative overflow-hidden py-10 px-6 bg-gradient-to-b from-teal-500 to-teal-600 sm:px-10 xl:p-12"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "absolute inset-0 pointer-events-none sm:hidden",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React__default["default"].createElement("svg", {
    className: "absolute inset-0 w-full h-full",
    width: 343,
    height: 388,
    viewBox: "0 0 343 388",
    fill: "none",
    preserveAspectRatio: "xMidYMid slice",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z",
    fill: "url(#linear1)",
    fillOpacity: ".1"
  }), /* @__PURE__ */ React__default["default"].createElement("defs", null, /* @__PURE__ */ React__default["default"].createElement("linearGradient", {
    id: "linear1",
    x1: "254.553",
    y1: "107.554",
    x2: "961.66",
    y2: "814.66",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React__default["default"].createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React__default["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  }))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React__default["default"].createElement("svg", {
    className: "absolute inset-0 w-full h-full",
    width: 359,
    height: 339,
    viewBox: "0 0 359 339",
    fill: "none",
    preserveAspectRatio: "xMidYMid slice",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z",
    fill: "url(#linear2)",
    fillOpacity: ".1"
  }), /* @__PURE__ */ React__default["default"].createElement("defs", null, /* @__PURE__ */ React__default["default"].createElement("linearGradient", {
    id: "linear2",
    x1: "192.553",
    y1: "28.553",
    x2: "899.66",
    y2: "735.66",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React__default["default"].createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React__default["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  }))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React__default["default"].createElement("svg", {
    className: "absolute inset-0 w-full h-full",
    width: 160,
    height: 678,
    viewBox: "0 0 160 678",
    fill: "none",
    preserveAspectRatio: "xMidYMid slice",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z",
    fill: "url(#linear3)",
    fillOpacity: ".1"
  }), /* @__PURE__ */ React__default["default"].createElement("defs", null, /* @__PURE__ */ React__default["default"].createElement("linearGradient", {
    id: "linear3",
    x1: "192.553",
    y1: "325.553",
    x2: "899.66",
    y2: "1032.66",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React__default["default"].createElement("stop", {
    stopColor: "#fff"
  }), /* @__PURE__ */ React__default["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  }))))), /* @__PURE__ */ React__default["default"].createElement("h3", {
    className: "text-lg font-medium text-white"
  }, "Contact information"), /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "mt-6 text-base text-teal-50 max-w-3xl"
  }, "Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu."), /* @__PURE__ */ React__default["default"].createElement("dl", {
    className: "mt-8 space-y-6"
  }, /* @__PURE__ */ React__default["default"].createElement("dt", null, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Phone number")), /* @__PURE__ */ React__default["default"].createElement("dd", {
    className: "flex text-base text-teal-50"
  }, /* @__PURE__ */ React__default["default"].createElement(outline.PhoneIcon, {
    className: "flex-shrink-0 w-6 h-6 text-teal-200",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "ml-3"
  }, "+1 (555) 123-4567")), /* @__PURE__ */ React__default["default"].createElement("dt", null, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Email")), /* @__PURE__ */ React__default["default"].createElement("dd", {
    className: "flex text-base text-teal-50"
  }, /* @__PURE__ */ React__default["default"].createElement(outline.MailIcon, {
    className: "flex-shrink-0 w-6 h-6 text-teal-200",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "ml-3"
  }, "support@workcation.com"))), /* @__PURE__ */ React__default["default"].createElement("ul", {
    className: "mt-8 flex space-x-12",
    role: "list"
  }, /* @__PURE__ */ React__default["default"].createElement("li", null, /* @__PURE__ */ React__default["default"].createElement("a", {
    className: "text-teal-200 hover:text-teal-100",
    href: "#"
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Facebook"), /* @__PURE__ */ React__default["default"].createElement("svg", {
    className: "w-7 h-7",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React__default["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    clipRule: "evenodd"
  })))), /* @__PURE__ */ React__default["default"].createElement("li", null, /* @__PURE__ */ React__default["default"].createElement("a", {
    className: "text-teal-200 hover:text-teal-100",
    href: "#"
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "sr-only"
  }, "GitHub"), /* @__PURE__ */ React__default["default"].createElement("svg", {
    className: "w-7 h-7",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React__default["default"].createElement("path", {
    fillRule: "evenodd",
    d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    clipRule: "evenodd"
  })))), /* @__PURE__ */ React__default["default"].createElement("li", null, /* @__PURE__ */ React__default["default"].createElement("a", {
    className: "text-teal-200 hover:text-teal-100",
    href: "#"
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Twitter"), /* @__PURE__ */ React__default["default"].createElement("svg", {
    className: "w-7 h-7",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React__default["default"].createElement("path", {
    d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
  })))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12"
  }, /* @__PURE__ */ React__default["default"].createElement("h3", {
    className: "text-lg font-medium text-warm-gray-900"
  }, "Send us a message"), /* @__PURE__ */ React__default["default"].createElement("form", {
    action: "#",
    method: "POST",
    className: "mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
  }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("label", {
    htmlFor: "first_name",
    className: "block text-sm font-medium text-warm-gray-900"
  }, "First name"), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React__default["default"].createElement("input", {
    type: "text",
    name: "first_name",
    id: "first_name",
    autoComplete: "given-name",
    className: "py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
  }))), /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("label", {
    htmlFor: "last_name",
    className: "block text-sm font-medium text-warm-gray-900"
  }, "Last name"), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React__default["default"].createElement("input", {
    type: "text",
    name: "last_name",
    id: "last_name",
    autoComplete: "family-name",
    className: "py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
  }))), /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium text-warm-gray-900"
  }, "Email"), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React__default["default"].createElement("input", {
    id: "email",
    name: "email",
    type: "email",
    autoComplete: "email",
    className: "py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
  }))), /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React__default["default"].createElement("label", {
    htmlFor: "phone",
    className: "block text-sm font-medium text-warm-gray-900"
  }, "Phone"), /* @__PURE__ */ React__default["default"].createElement("span", {
    id: "phone-optional",
    className: "text-sm text-warm-gray-500"
  }, "Optional")), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React__default["default"].createElement("input", {
    type: "text",
    name: "phone",
    id: "phone",
    autoComplete: "tel",
    className: "py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md",
    "aria-describedby": "phone-optional"
  }))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "sm:col-span-2"
  }, /* @__PURE__ */ React__default["default"].createElement("label", {
    htmlFor: "subject",
    className: "block text-sm font-medium text-warm-gray-900"
  }, "Subject"), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React__default["default"].createElement("input", {
    type: "text",
    name: "subject",
    id: "subject",
    className: "py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
  }))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "sm:col-span-2"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React__default["default"].createElement("label", {
    htmlFor: "message",
    className: "block text-sm font-medium text-warm-gray-900"
  }, "Message"), /* @__PURE__ */ React__default["default"].createElement("span", {
    id: "message-max",
    className: "text-sm text-warm-gray-500"
  }, "Max. 500 characters")), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React__default["default"].createElement("textarea", {
    id: "message",
    name: "message",
    rows: 4,
    className: "py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md",
    "aria-describedby": "message-max",
    defaultValue: ""
  }))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "sm:col-span-2 sm:flex sm:justify-end"
  }, /* @__PURE__ */ React__default["default"].createElement("button", {
    type: "submit",
    className: "mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
  }, "Submit")))))))), /* @__PURE__ */ React__default["default"].createElement("section", {
    "aria-labelledby": "officesHeading"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React__default["default"].createElement("h2", {
    id: "officesHeading",
    className: "text-3xl font-extrabold text-warm-gray-900"
  }, "Our offices"), /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "mt-6 text-lg text-warm-gray-500 max-w-3xl"
  }, "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames."), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
  }, offices.map((office) => /* @__PURE__ */ React__default["default"].createElement("div", {
    key: office.id
  }, /* @__PURE__ */ React__default["default"].createElement("h3", {
    className: "text-lg font-medium text-warm-gray-900"
  }, office.city), /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "mt-2 text-base text-warm-gray-500"
  }, office.address.map((line) => /* @__PURE__ */ React__default["default"].createElement("span", {
    key: line,
    className: "block"
  }, line))))))))), /* @__PURE__ */ React__default["default"].createElement("footer", {
    className: "bg-warm-gray-900",
    "aria-labelledby": "footerHeading"
  }, /* @__PURE__ */ React__default["default"].createElement("h2", {
    id: "footerHeading",
    className: "sr-only"
  }, "Footer"), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "xl:grid xl:grid-cols-3 xl:gap-8"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "space-y-8 xl:col-span-1"
  }, /* @__PURE__ */ React__default["default"].createElement("img", {
    className: "h-10",
    src: "https://tailwindui.com/img/logos/workflow-mark.svg?color=warmGray&shade=400",
    alt: "Company name"
  }), /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "text-warm-gray-400 text-base"
  }, "Making the world a better place through constructing elegant hierarchies."), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex space-x-6"
  }, footerNavigation$1.social.map((item) => /* @__PURE__ */ React__default["default"].createElement("a", {
    key: item.name,
    href: item.href,
    className: "text-warm-gray-400 hover:text-warm-gray-300"
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "sr-only"
  }, item.name), /* @__PURE__ */ React__default["default"].createElement(item.icon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  }))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "md:grid md:grid-cols-2 md:gap-8"
  }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("h3", {
    className: "text-sm font-semibold text-warm-gray-200 tracking-wider uppercase"
  }, "Solutions"), /* @__PURE__ */ React__default["default"].createElement("ul", {
    className: "mt-4 space-y-4"
  }, footerNavigation$1.solutions.map((item) => /* @__PURE__ */ React__default["default"].createElement("li", {
    key: item.name
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: item.href,
    className: "text-base text-warm-gray-400 hover:text-warm-gray-300"
  }, item.name))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-12 md:mt-0"
  }, /* @__PURE__ */ React__default["default"].createElement("h3", {
    className: "text-sm font-semibold text-warm-gray-200 tracking-wider uppercase"
  }, "Support"), /* @__PURE__ */ React__default["default"].createElement("ul", {
    className: "mt-4 space-y-4"
  }, footerNavigation$1.support.map((item) => /* @__PURE__ */ React__default["default"].createElement("li", {
    key: item.name
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: item.href,
    className: "text-base text-warm-gray-400 hover:text-warm-gray-300"
  }, item.name)))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "md:grid md:grid-cols-2 md:gap-8"
  }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("h3", {
    className: "text-sm font-semibold text-warm-gray-200 tracking-wider uppercase"
  }, "Company"), /* @__PURE__ */ React__default["default"].createElement("ul", {
    className: "mt-4 space-y-4"
  }, footerNavigation$1.company.map((item) => /* @__PURE__ */ React__default["default"].createElement("li", {
    key: item.name
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: item.href,
    className: "text-base text-warm-gray-400 hover:text-warm-gray-300"
  }, item.name))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-12 md:mt-0"
  }, /* @__PURE__ */ React__default["default"].createElement("h3", {
    className: "text-sm font-semibold text-warm-gray-200 tracking-wider uppercase"
  }, "Legal"), /* @__PURE__ */ React__default["default"].createElement("ul", {
    className: "mt-4 space-y-4"
  }, footerNavigation$1.legal.map((item) => /* @__PURE__ */ React__default["default"].createElement("li", {
    key: item.name
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: item.href,
    className: "text-base text-warm-gray-400 hover:text-warm-gray-300"
  }, item.name)))))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-12 border-t border-warm-gray-700 pt-8"
  }, /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "text-base text-warm-gray-400 xl:text-center"
  }, "\xA9 2020 Workflow, Inc. All rights reserved.")))));
}
var __glob_3_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Contact
});
const solutions = [
  {
    name: "Inbox",
    description: "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: outline.InboxIcon
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: outline.AnnotationIcon
  },
  {name: "Live Chat", description: "Your customers' data will be safe and secure.", href: "#", icon: outline.ChatAlt2Icon},
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: outline.QuestionMarkCircleIcon
  }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Header() {
  return /* @__PURE__ */ React__default["default"].createElement("header", null, /* @__PURE__ */ React__default["default"].createElement(react.Popover, {
    className: "relative bg-white"
  }, ({open}) => /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex justify-start lg:w-0 lg:flex-1"
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Workflow"), /* @__PURE__ */ React__default["default"].createElement("img", {
    className: "h-8 w-auto sm:h-10",
    src: "https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg",
    alt: ""
  }))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "-mr-2 -my-2 md:hidden"
  }, /* @__PURE__ */ React__default["default"].createElement(react.Popover.Button, {
    className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Open menu"), /* @__PURE__ */ React__default["default"].createElement(outline.MenuIcon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React__default["default"].createElement(react.Popover.Group, {
    as: "nav",
    className: "hidden md:flex space-x-10"
  }, /* @__PURE__ */ React__default["default"].createElement(react.Popover, {
    className: "relative"
  }, ({open: open2}) => /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, /* @__PURE__ */ React__default["default"].createElement(react.Popover.Button, {
    className: classNames(open2 ? "text-gray-900" : "text-gray-500", "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")
  }, /* @__PURE__ */ React__default["default"].createElement("span", null, "Solutions"), /* @__PURE__ */ React__default["default"].createElement(solid.ChevronDownIcon, {
    className: classNames(open2 ? "text-gray-600" : "text-gray-400", "ml-2 h-5 w-5 group-hover:text-gray-500"),
    "aria-hidden": "true"
  })), /* @__PURE__ */ React__default["default"].createElement(react.Transition, {
    show: open2,
    as: React.Fragment,
    enter: "transition ease-out duration-200",
    enterFrom: "opacity-0 translate-y-1",
    enterTo: "opacity-100 translate-y-0",
    leave: "transition ease-in duration-150",
    leaveFrom: "opacity-100 translate-y-0",
    leaveTo: "opacity-0 translate-y-1"
  }, /* @__PURE__ */ React__default["default"].createElement(react.Popover.Panel, {
    static: true,
    className: "absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2"
  }, solutions.map((item) => /* @__PURE__ */ React__default["default"].createElement("a", {
    key: item.name,
    href: item.href,
    className: "-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12"
  }, /* @__PURE__ */ React__default["default"].createElement(item.icon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "ml-4"
  }, /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "text-base font-medium text-gray-900"
  }, item.name), /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "mt-1 text-sm text-gray-500"
  }, item.description)))))))))), /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#",
    className: "text-base font-medium text-gray-500 hover:text-gray-900"
  }, "Pricing"), /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#",
    className: "text-base font-medium text-gray-500 hover:text-gray-900"
  }, "Partners"), /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#",
    className: "text-base font-medium text-gray-500 hover:text-gray-900"
  }, "Company")), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "hidden md:flex items-center justify-end md:flex-1 lg:w-0"
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#",
    className: "whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
  }, "Sign in"), /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#",
    className: "ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
  }, "Sign up"))), /* @__PURE__ */ React__default["default"].createElement(react.Transition, {
    show: open,
    as: React.Fragment,
    enter: "duration-200 ease-out",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "duration-100 ease-in",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95"
  }, /* @__PURE__ */ React__default["default"].createElement(react.Popover.Panel, {
    focus: true,
    static: true,
    className: "absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "pt-5 pb-6 px-5"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("img", {
    className: "h-8 w-auto",
    src: "https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg",
    alt: "Workflow"
  })), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "-mr-2"
  }, /* @__PURE__ */ React__default["default"].createElement(react.Popover.Button, {
    className: "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "sr-only"
  }, "Close menu"), /* @__PURE__ */ React__default["default"].createElement(outline.XIcon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-6"
  }, /* @__PURE__ */ React__default["default"].createElement("nav", {
    className: "grid grid-cols-1 gap-7"
  }, solutions.map((item) => /* @__PURE__ */ React__default["default"].createElement("a", {
    key: item.name,
    href: item.href,
    className: "-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
  }, /* @__PURE__ */ React__default["default"].createElement(item.icon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "ml-4 text-base font-medium text-gray-900"
  }, item.name)))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "py-6 px-5"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "grid grid-cols-2 gap-4"
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#",
    className: "text-base font-medium text-gray-900 hover:text-gray-700"
  }, "Pricing"), /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#",
    className: "text-base font-medium text-gray-900 hover:text-gray-700"
  }, "Partners"), /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#",
    className: "text-base font-medium text-gray-900 hover:text-gray-700"
  }, "Company")), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-6"
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#",
    className: "w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
  }, "Sign up"), /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "mt-6 text-center text-base font-medium text-gray-500"
  }, "Existing customer?", /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#",
    className: "text-gray-900"
  }, "Sign in"))))))))));
}
const features = [
  {
    name: "Unlimited Inboxes",
    description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: outline.InboxIcon
  },
  {
    name: "Manage Team Members",
    description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: outline.UsersIcon
  },
  {
    name: "Spam Report",
    description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: outline.TrashIcon
  },
  {
    name: "Compose in Markdown",
    description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: outline.PencilAltIcon
  },
  {
    name: "Team Reporting",
    description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: outline.DocumentReportIcon
  },
  {
    name: "Saved Replies",
    description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: outline.ReplyIcon
  },
  {
    name: "Email Commenting",
    description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: outline.ChatAltIcon
  },
  {
    name: "Connect with Customers",
    description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: outline.HeartIcon
  }
];
const metrics = [
  {id: 1, stat: "8K+", emphasis: "Companies", rest: "use laoreet amet lacus nibh integer quis."},
  {id: 2, stat: "25K+", emphasis: "Countries around the globe", rest: "lacus nibh integer quis."},
  {id: 3, stat: "98%", emphasis: "Customer satisfaction", rest: "laoreet amet lacus nibh integer quis."},
  {id: 4, stat: "12M+", emphasis: "Issues resolved", rest: "lacus nibh integer quis."}
];
const footerNavigation = {
  solutions: [
    {name: "Marketing", href: "#"},
    {name: "Analytics", href: "#"},
    {name: "Commerce", href: "#"},
    {name: "Insights", href: "#"}
  ],
  support: [
    {name: "Pricing", href: "#"},
    {name: "Documentation", href: "#"},
    {name: "Guides", href: "#"},
    {name: "API Status", href: "#"}
  ],
  company: [
    {name: "About", href: "#"},
    {name: "Blog", href: "#"},
    {name: "Jobs", href: "#"},
    {name: "Press", href: "#"},
    {name: "Partners", href: "#"}
  ],
  legal: [
    {name: "Claim", href: "#"},
    {name: "Privacy", href: "#"},
    {name: "Terms", href: "#"}
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => /* @__PURE__ */ React__default["default"].createElement("svg", __assign({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /* @__PURE__ */ React__default["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
        clipRule: "evenodd"
      }))
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => /* @__PURE__ */ React__default["default"].createElement("svg", __assign({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /* @__PURE__ */ React__default["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
        clipRule: "evenodd"
      }))
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => /* @__PURE__ */ React__default["default"].createElement("svg", __assign({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /* @__PURE__ */ React__default["default"].createElement("path", {
        d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
      }))
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => /* @__PURE__ */ React__default["default"].createElement("svg", __assign({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /* @__PURE__ */ React__default["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
        clipRule: "evenodd"
      }))
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (props) => /* @__PURE__ */ React__default["default"].createElement("svg", __assign({
        fill: "currentColor",
        viewBox: "0 0 24 24"
      }, props), /* @__PURE__ */ React__default["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
        clipRule: "evenodd"
      }))
    }
  ]
};
function Landing() {
  return /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React__default["default"].createElement(Header, null), /* @__PURE__ */ React__default["default"].createElement("main", null, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"
  }), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "max-w-7xl mx-auto sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "relative shadow-xl sm:rounded-2xl sm:overflow-hidden"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "absolute inset-0"
  }, /* @__PURE__ */ React__default["default"].createElement("img", {
    className: "h-full w-full object-cover",
    src: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
    alt: "People working on laptops"
  }), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700",
    style: {mixBlendMode: "multiply"}
  })), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"
  }, /* @__PURE__ */ React__default["default"].createElement("h1", {
    className: "text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "block text-white"
  }, "A Blockchain company")), /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl"
  }, "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"
  }, /* @__PURE__ */ React__default["default"].createElement(reactRouterDom.Link, {
    to: "/contact",
    className: "flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
  }, "Contact us"), /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#",
    className: "flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
  }, "Use cases"))))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "bg-gray-100"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "text-center text-sm font-semibold uppercase text-gray-500 tracking-wide"
  }, "Trusted by over 5 very average small businesses"), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
  }, /* @__PURE__ */ React__default["default"].createElement("img", {
    className: "h-12",
    src: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
    alt: "Tuple"
  })), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
  }, /* @__PURE__ */ React__default["default"].createElement("img", {
    className: "h-12",
    src: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
    alt: "Mirage"
  })), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
  }, /* @__PURE__ */ React__default["default"].createElement("img", {
    className: "h-12",
    src: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
    alt: "StaticKit"
  })), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1"
  }, /* @__PURE__ */ React__default["default"].createElement("img", {
    className: "h-12",
    src: "https://tailwindui.com/img/logos/transistor-logo-gray-400.svg",
    alt: "Transistor"
  })), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1"
  }, /* @__PURE__ */ React__default["default"].createElement("img", {
    className: "h-12",
    src: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
    alt: "Workcation"
  }))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "relative pt-16 pb-32 overflow-hidden"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    "aria-hidden": "true",
    className: "absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
  }), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0"
  }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600"
  }, /* @__PURE__ */ React__default["default"].createElement(outline.InboxIcon, {
    className: "h-6 w-6 text-white",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-6"
  }, /* @__PURE__ */ React__default["default"].createElement("h2", {
    className: "text-3xl font-extrabold tracking-tight text-gray-900"
  }, "Stay on top of customer support"), /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "mt-4 text-lg text-gray-500"
  }, "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-6"
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#",
    className: "inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
  }, "Get started")))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-8 border-t border-gray-200 pt-6"
  }, /* @__PURE__ */ React__default["default"].createElement("blockquote", null, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "text-base text-gray-500"
  }, "\u201CCras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.\u201D")), /* @__PURE__ */ React__default["default"].createElement("footer", {
    className: "mt-3"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex items-center space-x-3"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex-shrink-0"
  }, /* @__PURE__ */ React__default["default"].createElement("img", {
    className: "h-6 w-6 rounded-full",
    src: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    alt: ""
  })), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "text-base font-medium text-gray-700"
  }, "Marcia Hill, Digital Marketing Manager")))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-12 sm:mt-16 lg:mt-0"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
  }, /* @__PURE__ */ React__default["default"].createElement("img", {
    className: "w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none",
    src: "https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg",
    alt: "Inbox user interface"
  }))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-24"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
  }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600"
  }, /* @__PURE__ */ React__default["default"].createElement(outline.SparklesIcon, {
    className: "h-6 w-6 text-white",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-6"
  }, /* @__PURE__ */ React__default["default"].createElement("h2", {
    className: "text-3xl font-extrabold tracking-tight text-gray-900"
  }, "Better understand your customers"), /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "mt-4 text-lg text-gray-500"
  }, "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-6"
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#",
    className: "inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
  }, "Get started"))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-12 sm:mt-16 lg:mt-0 lg:col-start-1"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full"
  }, /* @__PURE__ */ React__default["default"].createElement("img", {
    className: "w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none",
    src: "https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg",
    alt: "Customer profile user interface"
  })))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "bg-gradient-to-r from-purple-800 to-indigo-700"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8"
  }, /* @__PURE__ */ React__default["default"].createElement("h2", {
    className: "text-3xl font-extrabold text-white tracking-tight"
  }, "Inbox support built for efficiency"), /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "mt-4 max-w-3xl text-lg text-purple-200"
  }, "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis in."), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16"
  }, features.map((feature) => /* @__PURE__ */ React__default["default"].createElement("div", {
    key: feature.name
  }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10"
  }, /* @__PURE__ */ React__default["default"].createElement(feature.icon, {
    className: "h-6 w-6 text-white",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-6"
  }, /* @__PURE__ */ React__default["default"].createElement("h3", {
    className: "text-lg font-medium text-white"
  }, feature.name), /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "mt-2 text-base text-purple-200"
  }, feature.description))))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "relative bg-gray-900"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "h-full w-full xl:grid xl:grid-cols-2"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "h-full xl:relative xl:col-start-2"
  }, /* @__PURE__ */ React__default["default"].createElement("img", {
    className: "h-full w-full object-cover opacity-25 xl:absolute xl:inset-0",
    src: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
    alt: "People working on laptops"
  }), /* @__PURE__ */ React__default["default"].createElement("div", {
    "aria-hidden": "true",
    className: "absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
  })))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24"
  }, /* @__PURE__ */ React__default["default"].createElement("h2", {
    className: "text-sm font-semibold tracking-wide uppercase"
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent"
  }, "Valuable Metrics")), /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "mt-3 text-3xl font-extrabold text-white"
  }, "Get actionable data that will help grow your business"), /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "mt-5 text-lg text-gray-300"
  }, "Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at."), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2"
  }, metrics.map((item) => /* @__PURE__ */ React__default["default"].createElement("p", {
    key: item.id
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "block text-2xl font-bold text-white"
  }, item.stat), /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "mt-1 block text-base text-gray-300"
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "font-medium text-white"
  }, item.emphasis), " ", item.rest))))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "bg-white"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between"
  }, /* @__PURE__ */ React__default["default"].createElement("h2", {
    className: "text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "block"
  }, "Ready to get started?"), /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
  }, "Get in touch or create an account.")), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5"
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#",
    className: "flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
  }, "Learn more"), /* @__PURE__ */ React__default["default"].createElement("a", {
    href: "#",
    className: "flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100"
  }, "Get started"))))), /* @__PURE__ */ React__default["default"].createElement("footer", {
    className: "bg-gray-50",
    "aria-labelledby": "footerHeading"
  }, /* @__PURE__ */ React__default["default"].createElement("h2", {
    id: "footerHeading",
    className: "sr-only"
  }, "Footer"), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "xl:grid xl:grid-cols-3 xl:gap-8"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "grid grid-cols-2 gap-8 xl:col-span-2"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "md:grid md:grid-cols-2 md:gap-8"
  }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("h3", {
    className: "text-sm font-semibold text-gray-400 tracking-wider uppercase"
  }, "Solutions"), /* @__PURE__ */ React__default["default"].createElement("ul", {
    className: "mt-4 space-y-4"
  }, footerNavigation.solutions.map((item) => /* @__PURE__ */ React__default["default"].createElement("li", {
    key: item.name
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: item.href,
    className: "text-base text-gray-500 hover:text-gray-900"
  }, item.name))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-12 md:mt-0"
  }, /* @__PURE__ */ React__default["default"].createElement("h3", {
    className: "text-sm font-semibold text-gray-400 tracking-wider uppercase"
  }, "Support"), /* @__PURE__ */ React__default["default"].createElement("ul", {
    className: "mt-4 space-y-4"
  }, footerNavigation.support.map((item) => /* @__PURE__ */ React__default["default"].createElement("li", {
    key: item.name
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: item.href,
    className: "text-base text-gray-500 hover:text-gray-900"
  }, item.name)))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "md:grid md:grid-cols-2 md:gap-8"
  }, /* @__PURE__ */ React__default["default"].createElement("div", null, /* @__PURE__ */ React__default["default"].createElement("h3", {
    className: "text-sm font-semibold text-gray-400 tracking-wider uppercase"
  }, "Company"), /* @__PURE__ */ React__default["default"].createElement("ul", {
    className: "mt-4 space-y-4"
  }, footerNavigation.company.map((item) => /* @__PURE__ */ React__default["default"].createElement("li", {
    key: item.name
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: item.href,
    className: "text-base text-gray-500 hover:text-gray-900"
  }, item.name))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-12 md:mt-0"
  }, /* @__PURE__ */ React__default["default"].createElement("h3", {
    className: "text-sm font-semibold text-gray-400 tracking-wider uppercase"
  }, "Legal"), /* @__PURE__ */ React__default["default"].createElement("ul", {
    className: "mt-4 space-y-4"
  }, footerNavigation.legal.map((item) => /* @__PURE__ */ React__default["default"].createElement("li", {
    key: item.name
  }, /* @__PURE__ */ React__default["default"].createElement("a", {
    href: item.href,
    className: "text-base text-gray-500 hover:text-gray-900"
  }, item.name))))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-12 xl:mt-0"
  }, /* @__PURE__ */ React__default["default"].createElement("h3", {
    className: "text-sm font-semibold text-gray-400 tracking-wider uppercase"
  }, "Subscribe to our newsletter"), /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "mt-4 text-base text-gray-500"
  }, "The latest news, articles, and resources, sent to your inbox weekly."), /* @__PURE__ */ React__default["default"].createElement("form", {
    className: "mt-4 sm:flex sm:max-w-md"
  }, /* @__PURE__ */ React__default["default"].createElement("label", {
    htmlFor: "emailAddress",
    className: "sr-only"
  }, "Email address"), /* @__PURE__ */ React__default["default"].createElement("input", {
    type: "email",
    name: "emailAddress",
    id: "emailAddress",
    autoComplete: "email",
    required: true,
    className: "appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400",
    placeholder: "Enter your email"
  }), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0"
  }, /* @__PURE__ */ React__default["default"].createElement("button", {
    type: "submit",
    className: "w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
  }, "Subscribe"))))), /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16"
  }, /* @__PURE__ */ React__default["default"].createElement("div", {
    className: "flex space-x-6 md:order-2"
  }, footerNavigation.social.map((item) => /* @__PURE__ */ React__default["default"].createElement("a", {
    key: item.name,
    href: item.href,
    className: "text-gray-400 hover:text-gray-500"
  }, /* @__PURE__ */ React__default["default"].createElement("span", {
    className: "sr-only"
  }, item.name), /* @__PURE__ */ React__default["default"].createElement(item.icon, {
    className: "h-6 w-6",
    "aria-hidden": "true"
  })))), /* @__PURE__ */ React__default["default"].createElement("p", {
    className: "mt-8 text-base text-gray-400 md:mt-0 md:order-1"
  }, "\xA9 2020 Workflow, Inc. All rights reserved.")))));
}
var __glob_3_2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  default: Landing
});
var index = "/* ./src/index.css */\n/* ! tailwindcss v2.1.2 | MIT License | https://tailwindcss.com */\n/*! modern-normalize v1.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n/*\nDocument\n========\n*/\n/**\nUse a better box model (opinionated).\n*/\n*,\n*::before,\n*::after {\n	box-sizing: border-box;\n}\n/**\nUse a more readable tab size (opinionated).\n*/\n:root {\n	-moz-tab-size: 4;\n	-o-tab-size: 4;\n	   tab-size: 4;\n}\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\nhtml {\n	line-height: 1.15; /* 1 */\n	-webkit-text-size-adjust: 100%; /* 2 */\n}\n/*\nSections\n========\n*/\n/**\nRemove the margin in all browsers.\n*/\nbody {\n	margin: 0;\n}\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\nbody {\n	font-family:\n		system-ui,\n		-apple-system, /* Firefox supports this but not yet `system-ui` */\n		'Segoe UI',\n		Roboto,\n		Helvetica,\n		Arial,\n		sans-serif,\n		'Apple Color Emoji',\n		'Segoe UI Emoji';\n}\n/*\nGrouping content\n================\n*/\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\nhr {\n	height: 0; /* 1 */\n	color: inherit; /* 2 */\n}\n/*\nText-level semantics\n====================\n*/\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr[title] {\n	-webkit-text-decoration: underline dotted;\n	        text-decoration: underline dotted;\n}\n/**\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n	font-weight: bolder;\n}\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n	font-family:\n		ui-monospace,\n		SFMono-Regular,\n		Consolas,\n		'Liberation Mono',\n		Menlo,\n		monospace; /* 1 */\n	font-size: 1em; /* 2 */\n}\n/**\nAdd the correct font size in all browsers.\n*/\nsmall {\n	font-size: 80%;\n}\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n	font-size: 75%;\n	line-height: 0;\n	position: relative;\n	vertical-align: baseline;\n}\nsub {\n	bottom: -0.25em;\n}\nsup {\n	top: -0.5em;\n}\n/*\nTabular data\n============\n*/\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\ntable {\n	text-indent: 0; /* 1 */\n	border-color: inherit; /* 2 */\n}\n/*\nForms\n=====\n*/\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n	font-family: inherit; /* 1 */\n	font-size: 100%; /* 1 */\n	line-height: 1.15; /* 1 */\n	margin: 0; /* 2 */\n}\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\nbutton,\nselect { /* 1 */\n	text-transform: none;\n}\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n	-webkit-appearance: button;\n}\n/**\nRemove the inner border and padding in Firefox.\n*/\n::-moz-focus-inner {\n	border-style: none;\n	padding: 0;\n}\n/**\nRestore the focus styles unset by the previous rule.\n*/\n:-moz-focusring {\n	outline: 1px dotted ButtonText;\n}\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n:-moz-ui-invalid {\n	box-shadow: none;\n}\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\nlegend {\n	padding: 0;\n}\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n	vertical-align: baseline;\n}\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n	height: auto;\n}\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n	-webkit-appearance: textfield; /* 1 */\n	outline-offset: -2px; /* 2 */\n}\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n	-webkit-appearance: none;\n}\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n::-webkit-file-upload-button {\n	-webkit-appearance: button; /* 1 */\n	font: inherit; /* 2 */\n}\n/*\nInteractive\n===========\n*/\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n	display: list-item;\n}\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n/**\n * Removes the default spacing and border for appropriate elements.\n */\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/**\n * Tailwind custom reset styles\n */\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\nhtml {\n  font-family: Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n/*\n * Ensure horizontal rules are visible by default\n */\nhr {\n  border-top-width: 1px;\n}\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\nimg {\n  border-style: solid;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\ntable {\n  border-collapse: collapse;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n* {\n	--tw-shadow: 0 0 #0000;\n	--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n	--tw-ring-offset-width: 0px;\n	--tw-ring-offset-color: #fff;\n	--tw-ring-color: rgba(59, 130, 246, 0.5);\n	--tw-ring-offset-shadow: 0 0 #0000;\n	--tw-ring-shadow: 0 0 #0000;\n}\n[type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select {\n	-webkit-appearance: none;\n	   -moz-appearance: none;\n	        appearance: none;\n	background-color: #fff;\n	border-color: #6b7280;\n	border-width: 1px;\n	border-radius: 0px;\n	padding-top: 0.5rem;\n	padding-right: 0.75rem;\n	padding-bottom: 0.5rem;\n	padding-left: 0.75rem;\n	font-size: 1rem;\n	line-height: 1.5rem;\n}\n[type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus {\n	outline: 2px solid transparent;\n	outline-offset: 2px;\n	--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n	--tw-ring-offset-width: 0px;\n	--tw-ring-offset-color: #fff;\n	--tw-ring-color: #2563eb;\n	--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n	--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n	box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n	border-color: #2563eb;\n}\ninput::-moz-placeholder, textarea::-moz-placeholder {\n	color: #6b7280;\n	opacity: 1;\n}\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n	color: #6b7280;\n	opacity: 1;\n}\ninput::placeholder,textarea::placeholder {\n	color: #6b7280;\n	opacity: 1;\n}\n::-webkit-datetime-edit-fields-wrapper {\n	padding: 0;\n}\n::-webkit-date-and-time-value {\n	min-height: 1.5em;\n}\nselect {\n	background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\");\n	background-position: right 0.5rem center;\n	background-repeat: no-repeat;\n	background-size: 1.5em 1.5em;\n	padding-right: 2.5rem;\n	-webkit-print-color-adjust: exact;\n	        color-adjust: exact;\n}\n[multiple] {\n	background-image: initial;\n	background-position: initial;\n	background-repeat: unset;\n	background-size: initial;\n	padding-right: 0.75rem;\n	-webkit-print-color-adjust: unset;\n	        color-adjust: unset;\n}\n[type='checkbox'],[type='radio'] {\n	-webkit-appearance: none;\n	   -moz-appearance: none;\n	        appearance: none;\n	padding: 0;\n	-webkit-print-color-adjust: exact;\n	        color-adjust: exact;\n	display: inline-block;\n	vertical-align: middle;\n	background-origin: border-box;\n	-webkit-user-select: none;\n	   -moz-user-select: none;\n	    -ms-user-select: none;\n	        user-select: none;\n	flex-shrink: 0;\n	height: 1rem;\n	width: 1rem;\n	color: #2563eb;\n	background-color: #fff;\n	border-color: #6b7280;\n	border-width: 1px;\n}\n[type='checkbox'] {\n	border-radius: 0px;\n}\n[type='radio'] {\n	border-radius: 100%;\n}\n[type='checkbox']:focus,[type='radio']:focus {\n	outline: 2px solid transparent;\n	outline-offset: 2px;\n	--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n	--tw-ring-offset-width: 2px;\n	--tw-ring-offset-color: #fff;\n	--tw-ring-color: #2563eb;\n	--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n	--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n	box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n[type='checkbox']:checked,[type='radio']:checked {\n	border-color: transparent;\n	background-color: currentColor;\n	background-size: 100% 100%;\n	background-position: center;\n	background-repeat: no-repeat;\n}\n[type='checkbox']:checked {\n	background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\");\n}\n[type='radio']:checked {\n	background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\");\n}\n[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus {\n	border-color: transparent;\n	background-color: currentColor;\n}\n[type='checkbox']:indeterminate {\n	background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\");\n	border-color: transparent;\n	background-color: currentColor;\n	background-size: 100% 100%;\n	background-position: center;\n	background-repeat: no-repeat;\n}\n[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus {\n	border-color: transparent;\n	background-color: currentColor;\n}\n[type='file'] {\n	background: unset;\n	border-color: inherit;\n	border-width: 0;\n	border-radius: 0;\n	padding: 0;\n	font-size: unset;\n	line-height: inherit;\n}\n[type='file']:focus {\n	outline: 1px auto -webkit-focus-ring-color;\n}\n.sr-only {\n	position: absolute;\n	width: 1px;\n	height: 1px;\n	padding: 0;\n	margin: -1px;\n	overflow: hidden;\n	clip: rect(0, 0, 0, 0);\n	white-space: nowrap;\n	border-width: 0;\n}\n.pointer-events-none {\n	pointer-events: none;\n}\n.relative {\n	position: relative;\n}\n.static {\n	position: static;\n}\n.absolute {\n	position: absolute;\n}\n.inset-0 {\n	top: 0px;\n	right: 0px;\n	bottom: 0px;\n	left: 0px;\n}\n.inset-x-0 {\n	left: 0px;\n	right: 0px;\n}\n.top-0 {\n	top: 0px;\n}\n.right-0 {\n	right: 0px;\n}\n.bottom-0 {\n	bottom: 0px;\n}\n.z-10 {\n	z-index: 10;\n}\n.z-30 {\n	z-index: 30;\n}\n.z-0 {\n	z-index: 0;\n}\n.col-span-1 {\n	grid-column: span 1 / span 1;\n}\n.col-span-2 {\n	grid-column: span 2 / span 2;\n}\n.-m-3 {\n	margin: -0.75rem;\n}\n.mx-auto {\n	margin-left: auto;\n	margin-right: auto;\n}\n.-my-2 {\n	margin-top: -0.5rem;\n	margin-bottom: -0.5rem;\n}\n.-mr-2 {\n	margin-right: -0.5rem;\n}\n.ml-2 {\n	margin-left: 0.5rem;\n}\n.-ml-4 {\n	margin-left: -1rem;\n}\n.mt-3 {\n	margin-top: 0.75rem;\n}\n.ml-4 {\n	margin-left: 1rem;\n}\n.mt-1 {\n	margin-top: 0.25rem;\n}\n.ml-8 {\n	margin-left: 2rem;\n}\n.mt-6 {\n	margin-top: 1.5rem;\n}\n.mt-8 {\n	margin-top: 2rem;\n}\n.ml-3 {\n	margin-left: 0.75rem;\n}\n.mt-2 {\n	margin-top: 0.5rem;\n}\n.mt-10 {\n	margin-top: 2.5rem;\n}\n.mt-12 {\n	margin-top: 3rem;\n}\n.mt-4 {\n	margin-top: 1rem;\n}\n.-mr-48 {\n	margin-right: -12rem;\n}\n.mt-24 {\n	margin-top: 6rem;\n}\n.-ml-48 {\n	margin-left: -12rem;\n}\n.mt-5 {\n	margin-top: 1.25rem;\n}\n.flex {\n	display: flex;\n}\n.inline-flex {\n	display: inline-flex;\n}\n.grid {\n	display: grid;\n}\n.block {\n	display: block;\n}\n.hidden {\n	display: none;\n}\n.h-8 {\n	height: 2rem;\n}\n.h-6 {\n	height: 1.5rem;\n}\n.h-5 {\n	height: 1.25rem;\n}\n.h-10 {\n	height: 2.5rem;\n}\n.h-1\\/2 {\n	height: 50%;\n}\n.h-full {\n	height: 100%;\n}\n.h-7 {\n	height: 1.75rem;\n}\n.h-12 {\n	height: 3rem;\n}\n.h-48 {\n	height: 12rem;\n}\n.h-80 {\n	height: 20rem;\n}\n.h-32 {\n	height: 8rem;\n}\n.min-h-screen {\n	min-height: 100vh;\n}\n.w-auto {\n	width: auto;\n}\n.w-6 {\n	width: 1.5rem;\n}\n.w-5 {\n	width: 1.25rem;\n}\n.w-screen {\n	width: 100vw;\n}\n.w-10 {\n	width: 2.5rem;\n}\n.w-full {\n	width: 100%;\n}\n.w-1\\/2 {\n	width: 50%;\n}\n.w-7 {\n	width: 1.75rem;\n}\n.w-12 {\n	width: 3rem;\n}\n.min-w-0 {\n	min-width: 0px;\n}\n.max-w-7xl {\n	max-width: 80rem;\n}\n.max-w-md {\n	max-width: 28rem;\n}\n.max-w-3xl {\n	max-width: 48rem;\n}\n.max-w-lg {\n	max-width: 32rem;\n}\n.max-w-sm {\n	max-width: 24rem;\n}\n.max-w-xl {\n	max-width: 36rem;\n}\n.max-w-4xl {\n	max-width: 56rem;\n}\n.flex-1 {\n	flex: 1 1 0%;\n}\n.flex-shrink-0 {\n	flex-shrink: 0;\n}\n.transform {\n	--tw-translate-x: 0;\n	--tw-translate-y: 0;\n	--tw-rotate: 0;\n	--tw-skew-x: 0;\n	--tw-skew-y: 0;\n	--tw-scale-x: 1;\n	--tw-scale-y: 1;\n	transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.origin-top-right {\n	transform-origin: top right;\n}\n.origin-top {\n	transform-origin: top;\n}\n.translate-y-1 {\n	--tw-translate-y: 0.25rem;\n}\n.translate-y-0 {\n	--tw-translate-y: 0px;\n}\n.-translate-y-16 {\n	--tw-translate-y: -4rem;\n}\n.translate-x-1\\/2 {\n	--tw-translate-x: 50%;\n}\n.scale-95 {\n	--tw-scale-x: .95;\n	--tw-scale-y: .95;\n}\n.scale-100 {\n	--tw-scale-x: 1;\n	--tw-scale-y: 1;\n}\n.appearance-none {\n	-webkit-appearance: none;\n	   -moz-appearance: none;\n	        appearance: none;\n}\n.grid-cols-1 {\n	grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2 {\n	grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.items-center {\n	align-items: center;\n}\n.items-start {\n	align-items: flex-start;\n}\n.justify-between {\n	justify-content: space-between;\n}\n.justify-start {\n	justify-content: flex-start;\n}\n.justify-center {\n	justify-content: center;\n}\n.justify-end {\n	justify-content: flex-end;\n}\n.gap-6 {\n	gap: 1.5rem;\n}\n.gap-7 {\n	gap: 1.75rem;\n}\n.gap-4 {\n	gap: 1rem;\n}\n.gap-10 {\n	gap: 2.5rem;\n}\n.gap-8 {\n	gap: 2rem;\n}\n.gap-y-6 {\n	row-gap: 1.5rem;\n}\n.gap-x-6 {\n	-moz-column-gap: 1.5rem;\n	     column-gap: 1.5rem;\n}\n.gap-y-12 {\n	row-gap: 3rem;\n}\n.space-x-10 > :not([hidden]) ~ :not([hidden]) {\n	--tw-space-x-reverse: 0;\n	margin-right: calc(2.5rem * var(--tw-space-x-reverse));\n	margin-left: calc(2.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n	--tw-space-y-reverse: 0;\n	margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n	margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n.space-y-6 > :not([hidden]) ~ :not([hidden]) {\n	--tw-space-y-reverse: 0;\n	margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n	margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\n}\n.space-x-12 > :not([hidden]) ~ :not([hidden]) {\n	--tw-space-x-reverse: 0;\n	margin-right: calc(3rem * var(--tw-space-x-reverse));\n	margin-left: calc(3rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-8 > :not([hidden]) ~ :not([hidden]) {\n	--tw-space-y-reverse: 0;\n	margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n	margin-bottom: calc(2rem * var(--tw-space-y-reverse));\n}\n.space-x-6 > :not([hidden]) ~ :not([hidden]) {\n	--tw-space-x-reverse: 0;\n	margin-right: calc(1.5rem * var(--tw-space-x-reverse));\n	margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n	--tw-space-y-reverse: 0;\n	margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n	margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.space-x-3 > :not([hidden]) ~ :not([hidden]) {\n	--tw-space-x-reverse: 0;\n	margin-right: calc(0.75rem * var(--tw-space-x-reverse));\n	margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.divide-y-2 > :not([hidden]) ~ :not([hidden]) {\n	--tw-divide-y-reverse: 0;\n	border-top-width: calc(2px * calc(1 - var(--tw-divide-y-reverse)));\n	border-bottom-width: calc(2px * var(--tw-divide-y-reverse));\n}\n.divide-gray-50 > :not([hidden]) ~ :not([hidden]) {\n	--tw-divide-opacity: 1;\n	border-color: rgba(249, 250, 251, var(--tw-divide-opacity));\n}\n.overflow-hidden {\n	overflow: hidden;\n}\n.whitespace-nowrap {\n	white-space: nowrap;\n}\n.rounded-md {\n	border-radius: 0.375rem;\n}\n.rounded-lg {\n	border-radius: 0.5rem;\n}\n.rounded-full {\n	border-radius: 9999px;\n}\n.rounded-xl {\n	border-radius: 0.75rem;\n}\n.border {\n	border-width: 1px;\n}\n.border-t {\n	border-top-width: 1px;\n}\n.border-transparent {\n	border-color: transparent;\n}\n.border-warm-gray-300 {\n	--tw-border-opacity: 1;\n	border-color: rgba(214, 211, 209, var(--tw-border-opacity));\n}\n.border-warm-gray-700 {\n	--tw-border-opacity: 1;\n	border-color: rgba(68, 64, 60, var(--tw-border-opacity));\n}\n.border-gray-200 {\n	--tw-border-opacity: 1;\n	border-color: rgba(229, 231, 235, var(--tw-border-opacity));\n}\n.border-gray-300 {\n	--tw-border-opacity: 1;\n	border-color: rgba(209, 213, 219, var(--tw-border-opacity));\n}\n.bg-white {\n	--tw-bg-opacity: 1;\n	background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-warm-gray-50 {\n	--tw-bg-opacity: 1;\n	background-color: rgba(250, 250, 249, var(--tw-bg-opacity));\n}\n.bg-warm-gray-100 {\n	--tw-bg-opacity: 1;\n	background-color: rgba(245, 245, 244, var(--tw-bg-opacity));\n}\n.bg-teal-500 {\n	--tw-bg-opacity: 1;\n	background-color: rgba(20, 184, 166, var(--tw-bg-opacity));\n}\n.bg-warm-gray-900 {\n	--tw-bg-opacity: 1;\n	background-color: rgba(28, 25, 23, var(--tw-bg-opacity));\n}\n.bg-gray-100 {\n	--tw-bg-opacity: 1;\n	background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.bg-indigo-500 {\n	--tw-bg-opacity: 1;\n	background-color: rgba(99, 102, 241, var(--tw-bg-opacity));\n}\n.bg-gray-900 {\n	--tw-bg-opacity: 1;\n	background-color: rgba(17, 24, 39, var(--tw-bg-opacity));\n}\n.bg-indigo-50 {\n	--tw-bg-opacity: 1;\n	background-color: rgba(238, 242, 255, var(--tw-bg-opacity));\n}\n.bg-gray-50 {\n	--tw-bg-opacity: 1;\n	background-color: rgba(249, 250, 251, var(--tw-bg-opacity));\n}\n.bg-opacity-60 {\n	--tw-bg-opacity: 0.6;\n}\n.bg-opacity-10 {\n	--tw-bg-opacity: 0.1;\n}\n.bg-gradient-to-r {\n	background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n.bg-gradient-to-b {\n	background-image: linear-gradient(to bottom, var(--tw-gradient-stops));\n}\n.from-purple-600 {\n	--tw-gradient-from: #7c3aed;\n	--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(124, 58, 237, 0));\n}\n.from-teal-500 {\n	--tw-gradient-from: #14b8a6;\n	--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(20, 184, 166, 0));\n}\n.from-purple-800 {\n	--tw-gradient-from: #5b21b6;\n	--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(91, 33, 182, 0));\n}\n.from-gray-100 {\n	--tw-gradient-from: #f3f4f6;\n	--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(243, 244, 246, 0));\n}\n.from-gray-900 {\n	--tw-gradient-from: #111827;\n	--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(17, 24, 39, 0));\n}\n.from-purple-300 {\n	--tw-gradient-from: #c4b5fd;\n	--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(196, 181, 253, 0));\n}\n.to-indigo-600 {\n	--tw-gradient-to: #4f46e5;\n}\n.to-teal-600 {\n	--tw-gradient-to: #0d9488;\n}\n.to-indigo-700 {\n	--tw-gradient-to: #4338ca;\n}\n.to-indigo-300 {\n	--tw-gradient-to: #a5b4fc;\n}\n.bg-clip-text {\n	-webkit-background-clip: text;\n	        background-clip: text;\n}\n.object-cover {\n	-o-object-fit: cover;\n	   object-fit: cover;\n}\n.p-2 {\n	padding: 0.5rem;\n}\n.p-3 {\n	padding: 0.75rem;\n}\n.px-4 {\n	padding-left: 1rem;\n	padding-right: 1rem;\n}\n.py-6 {\n	padding-top: 1.5rem;\n	padding-bottom: 1.5rem;\n}\n.px-5 {\n	padding-left: 1.25rem;\n	padding-right: 1.25rem;\n}\n.py-2 {\n	padding-top: 0.5rem;\n	padding-bottom: 0.5rem;\n}\n.px-6 {\n	padding-left: 1.5rem;\n	padding-right: 1.5rem;\n}\n.px-2 {\n	padding-left: 0.5rem;\n	padding-right: 0.5rem;\n}\n.px-3 {\n	padding-left: 0.75rem;\n	padding-right: 0.75rem;\n}\n.py-24 {\n	padding-top: 6rem;\n	padding-bottom: 6rem;\n}\n.py-10 {\n	padding-top: 2.5rem;\n	padding-bottom: 2.5rem;\n}\n.py-3 {\n	padding-top: 0.75rem;\n	padding-bottom: 0.75rem;\n}\n.py-12 {\n	padding-top: 3rem;\n	padding-bottom: 3rem;\n}\n.py-16 {\n	padding-top: 4rem;\n	padding-bottom: 4rem;\n}\n.pt-5 {\n	padding-top: 1.25rem;\n}\n.pb-6 {\n	padding-bottom: 1.5rem;\n}\n.pt-6 {\n	padding-top: 1.5rem;\n}\n.pt-4 {\n	padding-top: 1rem;\n}\n.pl-4 {\n	padding-left: 1rem;\n}\n.pr-8 {\n	padding-right: 2rem;\n}\n.pt-8 {\n	padding-top: 2rem;\n}\n.pt-16 {\n	padding-top: 4rem;\n}\n.pb-32 {\n	padding-bottom: 8rem;\n}\n.pr-4 {\n	padding-right: 1rem;\n}\n.pt-12 {\n	padding-top: 3rem;\n}\n.pb-64 {\n	padding-bottom: 16rem;\n}\n.pb-8 {\n	padding-bottom: 2rem;\n}\n.text-center {\n	text-align: center;\n}\n.text-base {\n	font-size: 1rem;\n	line-height: 1.5rem;\n}\n.text-sm {\n	font-size: 0.875rem;\n	line-height: 1.25rem;\n}\n.text-4xl {\n	font-size: 2.25rem;\n	line-height: 2.5rem;\n}\n.text-xl {\n	font-size: 1.25rem;\n	line-height: 1.75rem;\n}\n.text-lg {\n	font-size: 1.125rem;\n	line-height: 1.75rem;\n}\n.text-3xl {\n	font-size: 1.875rem;\n	line-height: 2.25rem;\n}\n.text-2xl {\n	font-size: 1.5rem;\n	line-height: 2rem;\n}\n.font-medium {\n	font-weight: 500;\n}\n.font-extrabold {\n	font-weight: 800;\n}\n.font-semibold {\n	font-weight: 600;\n}\n.font-bold {\n	font-weight: 700;\n}\n.uppercase {\n	text-transform: uppercase;\n}\n.tracking-tight {\n	letter-spacing: -0.025em;\n}\n.tracking-wider {\n	letter-spacing: 0.05em;\n}\n.tracking-wide {\n	letter-spacing: 0.025em;\n}\n.text-gray-400 {\n	--tw-text-opacity: 1;\n	color: rgba(156, 163, 175, var(--tw-text-opacity));\n}\n.text-gray-900 {\n	--tw-text-opacity: 1;\n	color: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n.text-gray-500 {\n	--tw-text-opacity: 1;\n	color: rgba(107, 114, 128, var(--tw-text-opacity));\n}\n.text-gray-600 {\n	--tw-text-opacity: 1;\n	color: rgba(75, 85, 99, var(--tw-text-opacity));\n}\n.text-white {\n	--tw-text-opacity: 1;\n	color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.text-warm-gray-400 {\n	--tw-text-opacity: 1;\n	color: rgba(168, 162, 158, var(--tw-text-opacity));\n}\n.text-warm-gray-500 {\n	--tw-text-opacity: 1;\n	color: rgba(120, 113, 108, var(--tw-text-opacity));\n}\n.text-warm-gray-900 {\n	--tw-text-opacity: 1;\n	color: rgba(28, 25, 23, var(--tw-text-opacity));\n}\n.text-warm-gray-200 {\n	--tw-text-opacity: 1;\n	color: rgba(231, 229, 228, var(--tw-text-opacity));\n}\n.text-teal-50 {\n	--tw-text-opacity: 1;\n	color: rgba(240, 253, 250, var(--tw-text-opacity));\n}\n.text-teal-200 {\n	--tw-text-opacity: 1;\n	color: rgba(153, 246, 228, var(--tw-text-opacity));\n}\n.text-indigo-200 {\n	--tw-text-opacity: 1;\n	color: rgba(199, 210, 254, var(--tw-text-opacity));\n}\n.text-indigo-700 {\n	--tw-text-opacity: 1;\n	color: rgba(67, 56, 202, var(--tw-text-opacity));\n}\n.text-gray-700 {\n	--tw-text-opacity: 1;\n	color: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n.text-purple-200 {\n	--tw-text-opacity: 1;\n	color: rgba(221, 214, 254, var(--tw-text-opacity));\n}\n.text-transparent {\n	color: transparent;\n}\n.text-gray-300 {\n	--tw-text-opacity: 1;\n	color: rgba(209, 213, 219, var(--tw-text-opacity));\n}\n.text-indigo-800 {\n	--tw-text-opacity: 1;\n	color: rgba(55, 48, 163, var(--tw-text-opacity));\n}\n.placeholder-gray-500::-moz-placeholder {\n	--tw-placeholder-opacity: 1;\n	color: rgba(107, 114, 128, var(--tw-placeholder-opacity));\n}\n.placeholder-gray-500:-ms-input-placeholder {\n	--tw-placeholder-opacity: 1;\n	color: rgba(107, 114, 128, var(--tw-placeholder-opacity));\n}\n.placeholder-gray-500::placeholder {\n	--tw-placeholder-opacity: 1;\n	color: rgba(107, 114, 128, var(--tw-placeholder-opacity));\n}\n.opacity-0 {\n	opacity: 0;\n}\n.opacity-100 {\n	opacity: 1;\n}\n.opacity-25 {\n	opacity: 0.25;\n}\n.shadow-lg {\n	--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n	--tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow {\n	--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-xl {\n	--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.ring-1 {\n	--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n	--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n	box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.ring-black {\n	--tw-ring-opacity: 1;\n	--tw-ring-color: rgba(0, 0, 0, var(--tw-ring-opacity));\n}\n.ring-opacity-5 {\n	--tw-ring-opacity: 0.05;\n}\n.transition {\n	transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n	transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n	transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n	transition-duration: 150ms;\n}\n.duration-200 {\n	transition-duration: 200ms;\n}\n.duration-150 {\n	transition-duration: 150ms;\n}\n.duration-100 {\n	transition-duration: 100ms;\n}\n.ease-out {\n	transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n.ease-in {\n	transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n}\n.hover\\:bg-gray-100:hover {\n	--tw-bg-opacity: 1;\n	background-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-50:hover {\n	--tw-bg-opacity: 1;\n	background-color: rgba(249, 250, 251, var(--tw-bg-opacity));\n}\n.hover\\:bg-warm-gray-100:hover {\n	--tw-bg-opacity: 1;\n	background-color: rgba(245, 245, 244, var(--tw-bg-opacity));\n}\n.hover\\:bg-warm-gray-200:hover {\n	--tw-bg-opacity: 1;\n	background-color: rgba(231, 229, 228, var(--tw-bg-opacity));\n}\n.hover\\:bg-warm-gray-50:hover {\n	--tw-bg-opacity: 1;\n	background-color: rgba(250, 250, 249, var(--tw-bg-opacity));\n}\n.hover\\:bg-teal-600:hover {\n	--tw-bg-opacity: 1;\n	background-color: rgba(13, 148, 136, var(--tw-bg-opacity));\n}\n.hover\\:bg-indigo-50:hover {\n	--tw-bg-opacity: 1;\n	background-color: rgba(238, 242, 255, var(--tw-bg-opacity));\n}\n.hover\\:bg-indigo-100:hover {\n	--tw-bg-opacity: 1;\n	background-color: rgba(224, 231, 255, var(--tw-bg-opacity));\n}\n.hover\\:bg-opacity-70:hover {\n	--tw-bg-opacity: 0.7;\n}\n.hover\\:from-purple-700:hover {\n	--tw-gradient-from: #6d28d9;\n	--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(109, 40, 217, 0));\n}\n.hover\\:to-indigo-700:hover {\n	--tw-gradient-to: #4338ca;\n}\n.hover\\:text-gray-500:hover {\n	--tw-text-opacity: 1;\n	color: rgba(107, 114, 128, var(--tw-text-opacity));\n}\n.hover\\:text-gray-900:hover {\n	--tw-text-opacity: 1;\n	color: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n.hover\\:text-gray-700:hover {\n	--tw-text-opacity: 1;\n	color: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n.hover\\:text-warm-gray-900:hover {\n	--tw-text-opacity: 1;\n	color: rgba(28, 25, 23, var(--tw-text-opacity));\n}\n.hover\\:text-teal-100:hover {\n	--tw-text-opacity: 1;\n	color: rgba(204, 251, 241, var(--tw-text-opacity));\n}\n.hover\\:text-warm-gray-300:hover {\n	--tw-text-opacity: 1;\n	color: rgba(214, 211, 209, var(--tw-text-opacity));\n}\n.focus\\:border-teal-500:focus {\n	--tw-border-opacity: 1;\n	border-color: rgba(20, 184, 166, var(--tw-border-opacity));\n}\n.focus\\:border-indigo-500:focus {\n	--tw-border-opacity: 1;\n	border-color: rgba(99, 102, 241, var(--tw-border-opacity));\n}\n.focus\\:placeholder-gray-400:focus::-moz-placeholder {\n	--tw-placeholder-opacity: 1;\n	color: rgba(156, 163, 175, var(--tw-placeholder-opacity));\n}\n.focus\\:placeholder-gray-400:focus:-ms-input-placeholder {\n	--tw-placeholder-opacity: 1;\n	color: rgba(156, 163, 175, var(--tw-placeholder-opacity));\n}\n.focus\\:placeholder-gray-400:focus::placeholder {\n	--tw-placeholder-opacity: 1;\n	color: rgba(156, 163, 175, var(--tw-placeholder-opacity));\n}\n.focus\\:outline-none:focus {\n	outline: 2px solid transparent;\n	outline-offset: 2px;\n}\n.focus\\:ring-2:focus {\n	--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n	--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n	box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-inset:focus {\n	--tw-ring-inset: inset;\n}\n.focus\\:ring-indigo-500:focus {\n	--tw-ring-opacity: 1;\n	--tw-ring-color: rgba(99, 102, 241, var(--tw-ring-opacity));\n}\n.focus\\:ring-teal-500:focus {\n	--tw-ring-opacity: 1;\n	--tw-ring-color: rgba(20, 184, 166, var(--tw-ring-opacity));\n}\n.focus\\:ring-offset-2:focus {\n	--tw-ring-offset-width: 2px;\n}\n.group:hover .group-hover\\:text-gray-500 {\n	--tw-text-opacity: 1;\n	color: rgba(107, 114, 128, var(--tw-text-opacity));\n}\n@media (min-width: 640px) {\n	.sm\\:col-span-2 {\n		grid-column: span 2 / span 2;\n	}\n	.sm\\:mx-auto {\n		margin-left: auto;\n		margin-right: auto;\n	}\n	.sm\\:mt-16 {\n		margin-top: 4rem;\n	}\n	.sm\\:mt-0 {\n		margin-top: 0px;\n	}\n	.sm\\:ml-3 {\n		margin-left: 0.75rem;\n	}\n	.sm\\:block {\n		display: block;\n	}\n	.sm\\:flex {\n		display: flex;\n	}\n	.sm\\:inline-grid {\n		display: inline-grid;\n	}\n	.sm\\:hidden {\n		display: none;\n	}\n	.sm\\:h-10 {\n		height: 2.5rem;\n	}\n	.sm\\:h-12 {\n		height: 3rem;\n	}\n	.sm\\:w-12 {\n		width: 3rem;\n	}\n	.sm\\:w-auto {\n		width: auto;\n	}\n	.sm\\:max-w-3xl {\n		max-width: 48rem;\n	}\n	.sm\\:max-w-none {\n		max-width: none;\n	}\n	.sm\\:max-w-md {\n		max-width: 28rem;\n	}\n	.sm\\:flex-shrink-0 {\n		flex-shrink: 0;\n	}\n	.sm\\:translate-x-1\\/4 {\n		--tw-translate-x: 25%;\n	}\n	.sm\\:grid-cols-2 {\n		grid-template-columns: repeat(2, minmax(0, 1fr));\n	}\n	.sm\\:justify-end {\n		justify-content: flex-end;\n	}\n	.sm\\:justify-center {\n		justify-content: center;\n	}\n	.sm\\:gap-8 {\n		gap: 2rem;\n	}\n	.sm\\:gap-5 {\n		gap: 1.25rem;\n	}\n	.sm\\:gap-x-8 {\n		-moz-column-gap: 2rem;\n		     column-gap: 2rem;\n	}\n	.sm\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {\n		--tw-space-y-reverse: 0;\n		margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n		margin-bottom: calc(0px * var(--tw-space-y-reverse));\n	}\n	.sm\\:space-x-5 > :not([hidden]) ~ :not([hidden]) {\n		--tw-space-x-reverse: 0;\n		margin-right: calc(1.25rem * var(--tw-space-x-reverse));\n		margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)));\n	}\n	.sm\\:overflow-hidden {\n		overflow: hidden;\n	}\n	.sm\\:rounded-2xl {\n		border-radius: 1rem;\n	}\n	.sm\\:p-8 {\n		padding: 2rem;\n	}\n	.sm\\:px-6 {\n		padding-left: 1.5rem;\n		padding-right: 1.5rem;\n	}\n	.sm\\:px-10 {\n		padding-left: 2.5rem;\n		padding-right: 2.5rem;\n	}\n	.sm\\:py-32 {\n		padding-top: 8rem;\n		padding-bottom: 8rem;\n	}\n	.sm\\:py-24 {\n		padding-top: 6rem;\n		padding-bottom: 6rem;\n	}\n	.sm\\:px-8 {\n		padding-left: 2rem;\n		padding-right: 2rem;\n	}\n	.sm\\:pl-6 {\n		padding-left: 1.5rem;\n	}\n	.sm\\:pr-6 {\n		padding-right: 1.5rem;\n	}\n	.sm\\:pt-20 {\n		padding-top: 5rem;\n	}\n	.sm\\:pb-24 {\n		padding-bottom: 6rem;\n	}\n	.sm\\:pt-24 {\n		padding-top: 6rem;\n	}\n	.sm\\:pb-64 {\n		padding-bottom: 16rem;\n	}\n	.sm\\:text-5xl {\n		font-size: 3rem;\n		line-height: 1;\n	}\n	.sm\\:text-4xl {\n		font-size: 2.25rem;\n		line-height: 2.5rem;\n	}\n}\n@media (min-width: 768px) {\n	.md\\:order-2 {\n		order: 2;\n	}\n	.md\\:order-1 {\n		order: 1;\n	}\n	.md\\:col-span-2 {\n		grid-column: span 2 / span 2;\n	}\n	.md\\:col-start-2 {\n		grid-column-start: 2;\n	}\n	.md\\:col-start-4 {\n		grid-column-start: 4;\n	}\n	.md\\:mt-0 {\n		margin-top: 0px;\n	}\n	.md\\:-mr-16 {\n		margin-right: -4rem;\n	}\n	.md\\:-ml-16 {\n		margin-left: -4rem;\n	}\n	.md\\:flex {\n		display: flex;\n	}\n	.md\\:grid {\n		display: grid;\n	}\n	.md\\:hidden {\n		display: none;\n	}\n	.md\\:flex-1 {\n		flex: 1 1 0%;\n	}\n	.md\\:-translate-y-24 {\n		--tw-translate-y: -6rem;\n	}\n	.md\\:grid-cols-2 {\n		grid-template-columns: repeat(2, minmax(0, 1fr));\n	}\n	.md\\:grid-cols-6 {\n		grid-template-columns: repeat(6, minmax(0, 1fr));\n	}\n	.md\\:items-center {\n		align-items: center;\n	}\n	.md\\:justify-start {\n		justify-content: flex-start;\n	}\n	.md\\:justify-between {\n		justify-content: space-between;\n	}\n	.md\\:gap-8 {\n		gap: 2rem;\n	}\n	.md\\:space-x-10 > :not([hidden]) ~ :not([hidden]) {\n		--tw-space-x-reverse: 0;\n		margin-right: calc(2.5rem * var(--tw-space-x-reverse));\n		margin-left: calc(2.5rem * calc(1 - var(--tw-space-x-reverse)));\n	}\n}\n@media (min-width: 1024px) {\n	.lg\\:relative {\n		position: relative;\n	}\n	.lg\\:absolute {\n		position: absolute;\n	}\n	.lg\\:left-1\\/2 {\n		left: 50%;\n	}\n	.lg\\:left-0 {\n		left: 0px;\n	}\n	.lg\\:right-0 {\n		right: 0px;\n	}\n	.lg\\:col-span-2 {\n		grid-column: span 2 / span 2;\n	}\n	.lg\\:col-span-1 {\n		grid-column: span 1 / span 1;\n	}\n	.lg\\:col-start-2 {\n		grid-column-start: 2;\n	}\n	.lg\\:col-start-1 {\n		grid-column-start: 1;\n	}\n	.lg\\:m-0 {\n		margin: 0px;\n	}\n	.lg\\:mx-auto {\n		margin-left: auto;\n		margin-right: auto;\n	}\n	.lg\\:mx-0 {\n		margin-left: 0px;\n		margin-right: 0px;\n	}\n	.lg\\:ml-0 {\n		margin-left: 0px;\n	}\n	.lg\\:ml-10 {\n		margin-left: 2.5rem;\n	}\n	.lg\\:mt-0 {\n		margin-top: 0px;\n	}\n	.lg\\:mt-16 {\n		margin-top: 4rem;\n	}\n	.lg\\:flex {\n		display: flex;\n	}\n	.lg\\:block {\n		display: block;\n	}\n	.lg\\:grid {\n		display: grid;\n	}\n	.lg\\:hidden {\n		display: none;\n	}\n	.lg\\:h-full {\n		height: 100%;\n	}\n	.lg\\:w-0 {\n		width: 0px;\n	}\n	.lg\\:w-auto {\n		width: auto;\n	}\n	.lg\\:max-w-2xl {\n		max-width: 42rem;\n	}\n	.lg\\:max-w-7xl {\n		max-width: 80rem;\n	}\n	.lg\\:max-w-none {\n		max-width: none;\n	}\n	.lg\\:flex-1 {\n		flex: 1 1 0%;\n	}\n	.lg\\:-translate-x-1\\/2 {\n		--tw-translate-x: -50%;\n	}\n	.lg\\:-translate-y-72 {\n		--tw-translate-y: -18rem;\n	}\n	.lg\\:grid-flow-col-dense {\n		grid-auto-flow: column dense;\n	}\n	.lg\\:grid-cols-2 {\n		grid-template-columns: repeat(2, minmax(0, 1fr));\n	}\n	.lg\\:grid-cols-3 {\n		grid-template-columns: repeat(3, minmax(0, 1fr));\n	}\n	.lg\\:grid-cols-4 {\n		grid-template-columns: repeat(4, minmax(0, 1fr));\n	}\n	.lg\\:grid-cols-5 {\n		grid-template-columns: repeat(5, minmax(0, 1fr));\n	}\n	.lg\\:items-center {\n		align-items: center;\n	}\n	.lg\\:justify-between {\n		justify-content: space-between;\n	}\n	.lg\\:gap-24 {\n		gap: 6rem;\n	}\n	.lg\\:gap-x-8 {\n		-moz-column-gap: 2rem;\n		     column-gap: 2rem;\n	}\n	.lg\\:gap-y-16 {\n		row-gap: 4rem;\n	}\n	.lg\\:space-x-6 > :not([hidden]) ~ :not([hidden]) {\n		--tw-space-x-reverse: 0;\n		margin-right: calc(1.5rem * var(--tw-space-x-reverse));\n		margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n	}\n	.lg\\:px-8 {\n		padding-left: 2rem;\n		padding-right: 2rem;\n	}\n	.lg\\:py-32 {\n		padding-top: 8rem;\n		padding-bottom: 8rem;\n	}\n	.lg\\:py-16 {\n		padding-top: 4rem;\n		padding-bottom: 4rem;\n	}\n	.lg\\:px-0 {\n		padding-left: 0px;\n		padding-right: 0px;\n	}\n	.lg\\:pt-24 {\n		padding-top: 6rem;\n	}\n	.lg\\:text-6xl {\n		font-size: 3.75rem;\n		line-height: 1;\n	}\n}\n@media (min-width: 1280px) {\n	.xl\\:relative {\n		position: relative;\n	}\n	.xl\\:absolute {\n		position: absolute;\n	}\n	.xl\\:inset-0 {\n		top: 0px;\n		right: 0px;\n		bottom: 0px;\n		left: 0px;\n	}\n	.xl\\:inset-y-0 {\n		top: 0px;\n		bottom: 0px;\n	}\n	.xl\\:top-0 {\n		top: 0px;\n	}\n	.xl\\:left-0 {\n		left: 0px;\n	}\n	.xl\\:col-span-1 {\n		grid-column: span 1 / span 1;\n	}\n	.xl\\:col-span-2 {\n		grid-column: span 2 / span 2;\n	}\n	.xl\\:col-start-2 {\n		grid-column-start: 2;\n	}\n	.xl\\:col-start-1 {\n		grid-column-start: 1;\n	}\n	.xl\\:mt-0 {\n		margin-top: 0px;\n	}\n	.xl\\:grid {\n		display: grid;\n	}\n	.xl\\:h-full {\n		height: 100%;\n	}\n	.xl\\:w-32 {\n		width: 8rem;\n	}\n	.xl\\:grid-flow-col-dense {\n		grid-auto-flow: column dense;\n	}\n	.xl\\:grid-cols-3 {\n		grid-template-columns: repeat(3, minmax(0, 1fr));\n	}\n	.xl\\:grid-cols-2 {\n		grid-template-columns: repeat(2, minmax(0, 1fr));\n	}\n	.xl\\:gap-8 {\n		gap: 2rem;\n	}\n	.xl\\:gap-x-8 {\n		-moz-column-gap: 2rem;\n		     column-gap: 2rem;\n	}\n	.xl\\:bg-gradient-to-r {\n		background-image: linear-gradient(to right, var(--tw-gradient-stops));\n	}\n	.xl\\:p-12 {\n		padding: 3rem;\n	}\n	.xl\\:px-8 {\n		padding-left: 2rem;\n		padding-right: 2rem;\n	}\n	.xl\\:pb-24 {\n		padding-bottom: 6rem;\n	}\n	.xl\\:text-center {\n		text-align: center;\n	}\n}";
const pages = {"./pages/About.tsx": __glob_3_0, "./pages/Contact.tsx": __glob_3_1, "./pages/Home.tsx": __glob_3_2};
const routes = Object.keys(pages).filter((path) => !!path).map((path) => {
  const matches = path.match(/\.\/pages\/(.*)\.tsx$/);
  if (!(matches == null ? void 0 : matches.length)) {
    return null;
  }
  const name = matches[1];
  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: pages[path].default
  };
}).filter((c) => !!c);
function App() {
  return /* @__PURE__ */ React__default["default"].createElement(reactRouterDom.Switch, null, routes.map(({path, component: RouteComp}) => {
    return /* @__PURE__ */ React__default["default"].createElement(reactRouterDom.Route, {
      key: path,
      path
    }, /* @__PURE__ */ React__default["default"].createElement(RouteComp, null));
  }));
}
function render(url, context) {
  return ReactDOMServer__default["default"].renderToString(/* @__PURE__ */ React__default["default"].createElement(reactRouterDom.StaticRouter, {
    location: url,
    context
  }, /* @__PURE__ */ React__default["default"].createElement(App, null)));
}
exports.render = render;
