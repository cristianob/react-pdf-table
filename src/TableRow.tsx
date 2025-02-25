import * as React from "react";
import {TableBorder, TableCell} from "./TableCell";
import {DataTableCell} from "./DataTableCell";
import ReactPDF, {View} from "@react-pdf/renderer";
import {getDefaultBorderIncludes} from "./Utils";
import {TableBodyProps} from "./TableBody";

export interface TableRowProps extends TableBorder {
    /**
     * The font size as a valid unit defined in react-pdf.
     */
    fontSize?: number | string;

    /**
     * Whether to align the text. Defaults to left.
     */
    textAlign?: "left" | "center" | "right";

    /**
     * Any data associated, relevant if the parent is a {@see DataTableCell}.
     */
    data?: any;
}

/**
 * This component describes how to display a row.
 */
export class TableRow extends React.PureComponent<Partial<TableBodyProps>> {
    render() {
        const rowCells: any[] = React.Children.toArray(this.props.children);
        const {includeLeftBorder, includeBottomBorder, includeRightBorder, includeTopBorder} = getDefaultBorderIncludes(this.props);
        return (
            <View
                style={{
                    borderBottom: includeBottomBorder && "1pt solid black",
                    borderRight: includeRightBorder && "1pt solid black",
                    borderLeft: includeLeftBorder && "1pt solid black",
                    borderTop: includeTopBorder && "1pt solid black",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "stretch"
                } as ReactPDF.Style}
                wrap={false}
            >
                {
                    rowCells.map((rc, columnIndex) => React.cloneElement(rc, {
                        data: this.props.data,
                        key: columnIndex,
                        fontSize: this.props.fontSize,
                        textAlign: this.props.textAlign,
                        includeLeftBorder: columnIndex === 0,
                        includeRightBorder: columnIndex !== (rowCells.length - 1),
                    }))
                }
            </View>
        );
    }
}
