"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Modal = function Modal(_ref) {
  var message = _ref.message,
    onClose = _ref.onClose;
  var modalwindowStyle = {
    position: "fixed",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "100%",
    overflow: "auto",
    zIndex: "1",
    padding: "20px",
    boxSizing: "border-box",
    backgroundColor: "rgba(0,0,0,0.75)",
    textAlign: "center"
  };
  var modalcontainerStyle = {
    display: "flex",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "fit-content",
    padding: "0 1rem",
    gap: "1rem",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "5px",
    border: "solid grey 2px"
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    style: modalwindowStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: modalcontainerStyle
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClose
  }, "X"), /*#__PURE__*/_react.default.createElement("p", null, message)));
};
var _default = Modal;
exports.default = _default;