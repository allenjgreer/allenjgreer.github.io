webpackHotUpdate("app",{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Starmap.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Starmap.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue */ \"./src/components/header.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'Starmap',\n  components: {\n    Header: _header_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data: function data() {\n    return {\n      canvas: {\n        context: null,\n        width: null,\n        height: null\n      },\n      particles: {\n        array: [],\n        colour: '255, 255, 255',\n        number: 1000,\n        opacity: 0.5,\n        size: {\n          random: true,\n          value: 5\n        }\n      },\n      pixelRatio: null\n    };\n  },\n  mounted: function mounted() {\n    this.pixelRatio = window.devicePixelRatio || 1;\n    this.canvas.context = this.$refs.starmap.getContext('2d', {\n      alpha: false\n    });\n    window.addEventListener('resize', this.handleResizeEvent.bind(this));\n    this.setDimensions();\n    this.createParticles();\n    this.animate();\n  },\n  methods: {\n    animate: function animate() {\n      this.clearCanvas();\n      this.updateParticles();\n      this.drawParticles(); // window.requestAnimationFrame(this.animate)\n    },\n    setDimensions: function setDimensions() {\n      var rect = this.$refs.starmap.parentNode.getBoundingClientRect();\n      this.canvas.height = rect.height * this.pixelRatio;\n      this.canvas.width = rect.width * this.pixelRatio;\n      this.$refs.starmap.height = rect.height * this.pixelRatio;\n      this.$refs.starmap.width = rect.width * this.pixelRatio;\n    },\n    createParticles: function createParticles() {\n      for (var i = 0; i < this.particles.number; i++) {\n        var radius = Math.floor((this.particles.size.random ? Math.random() : 1) * this.particles.size.value);\n        var x = Math.floor(Math.random() * this.canvas.width);\n        var y = Math.floor(Math.random() * this.canvas.height);\n        var vx = Math.random() - 0.5;\n        var vy = Math.random() - 0.5;\n        this.particles.array.push({\n          radius: radius,\n          x: x,\n          y: y,\n          vx: vx,\n          vy: vy\n        });\n      }\n    },\n    clearCanvas: function clearCanvas() {\n      this.canvas.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n      this.canvas.context.fillStyle = '#474747';\n      this.canvas.context.fillRect(0, 0, this.canvas.width, this.canvas.height);\n    },\n    drawParticles: function drawParticles() {\n      for (var i = 0; i < this.particles.array.length; i++) {\n        var context = this.canvas.context;\n        var particle = this.particles.array[i];\n        context.fillStyle = \"rgba(\".concat(this.particles.colour, \", \").concat(this.particles.opacity, \")\");\n        context.beginPath();\n        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);\n        context.closePath();\n        context.fill();\n      }\n    },\n    handleResizeEvent: function handleResizeEvent() {\n      var oldWidth = this.canvas.width;\n      var oldHeight = this.canvas.height;\n      this.setDimensions();\n\n      for (var i = 0; i < this.particles.array.length; i++) {\n        var particle = this.particles.array[i];\n        particle.x *= this.canvas.width / oldWidth;\n        particle.y *= this.canvas.height / oldHeight;\n      }\n\n      this.canvas.context.clearRect(0, 0, oldWidth, oldHeight);\n      this.drawParticles();\n    },\n    updateParticles: function updateParticles() {\n      var ms = 0.5;\n\n      for (var i = 0; i < this.particles.array.length; i++) {\n        var particle = this.particles.array[i];\n        var x = particle.x - particle.radius + particle.vx * ms;\n        var y = particle.y - particle.radius + particle.vy * ms;\n\n        if (x < 0 || x > this.canvas.width - particle.radius * 2) {\n          particle.vx *= -1;\n        } else if (y < 0 || y > this.canvas.height - particle.radius * 2) {\n          particle.vy *= -1;\n        }\n\n        particle.x += particle.vx * ms;\n        particle.y += particle.vy * ms;\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/Starmap.vue?./node_modules/babel-loader/lib??ref--0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Starmap.vue?vue&type=template&id=68173a6c&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Starmap.vue?vue&type=template&id=68173a6c& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"container\" },\n    [\n      _c(\"Header\"),\n      _vm._v(\" \"),\n      _c(\"div\", { staticClass: \"starmap\" }, [\n        _c(\"canvas\", { ref: \"starmap\" }),\n        _vm._v(\" \"),\n        _vm._m(0),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"left-wing\" }),\n        _vm._v(\" \"),\n        _c(\"div\", { staticClass: \"right-wing\" })\n      ])\n    ],\n    1\n  )\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"a\", { attrs: { href: \"#\" } }, [\n      _c(\"img\", { attrs: { src: \"assets/images/readMore-pill.svg\" } })\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/Starmap.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

})