"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var renderer_1 = require("@react-pdf/renderer");
var Utils_1 = require("./Utils");
var TableCell = (function (_super) {
    __extends(TableCell, _super);
    function TableCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableCell.prototype.render = function () {
        var content = null;
        if (typeof this.props.children === "string") {
            content = (React.createElement(renderer_1.Text, null, this.props.children));
        }
        else {
            content = this.props.children;
        }
        var cellStyle = this.props.styles || [];
        var includeRightBorder = Utils_1.getDefaultBorderIncludes(this.props).includeRightBorder;
        return (React.createElement(renderer_1.View, { style: __spreadArrays([
                {
                    width: this.props.width,
                    alignItems: "stretch",
                    textAlign: this.props.textAlign || "left",
                    fontSize: this.props.fontSize || (this.props.isHeader === true ? 14 : 12),
                    borderRight: includeRightBorder && "1pt solid black",
                }
            ], cellStyle), wrap: false }, content));
    };
    return TableCell;
}(React.PureComponent));
exports.TableCell = TableCell;
//# sourceMappingURL=TableCell.js.map