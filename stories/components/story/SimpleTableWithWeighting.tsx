import * as React from "react";
import {Table} from "../../../src";
import {PdfContainer} from "../PdfContainer";
import {generateRandomData, HumanRow} from "../../data/Humans";
import {TableCell} from "../../../src/TableCell";
import {DataTableCell} from "../../../src/DataTableCell";
import {TableBody} from "../../../src/TableBody";
import {TableHeader} from "../../../src/TableHeader";
import {optionsKnob as options, text} from "@storybook/addon-knobs";

interface SimpleTableWithWeightingState {
    data: HumanRow[];
}

export class SimpleTableWithWeighting extends React.Component<{}, SimpleTableWithWeightingState> {
    state = {
        data: generateRandomData(80)
    };

    private generateWeightingOptions = (): {[key: string]: number}[] => {
        const result: any = {};
        for(let i = 1; i < 10; i++) {
            result[`${i * 10}%`] = `${i * 10}%`;
        }

        return result;
    };

    render() {
        return (
            <PdfContainer>
                <Table
                    data={this.state.data}
                >
                    <TableHeader
                        textAlign={options("textAlign", {left: "left", center: "center", right: "right"}, undefined, {display: "select"})}
                        fontSize={text("fontSize", undefined)}
                    >
                        <TableCell
                            width={options("column 1 weighting", this.generateWeightingOptions(), undefined, {display: "select"})}
                        >
                            First Name
                        </TableCell>
                        <TableCell
                            width={options("column 2 weighting", this.generateWeightingOptions(), undefined, {display: "select"})}
                        >
                            Last Name
                        </TableCell>
                        <TableCell width={options("column 3 weighting", this.generateWeightingOptions(), undefined, { display: "select" })}>
                            DOB
                        </TableCell>
                        <TableCell width={options("column 4 weighting", this.generateWeightingOptions(), undefined, { display: "select" })}>
                            Country
                        </TableCell>
                        <TableCell width={options("column 5 weighting", this.generateWeightingOptions(), undefined, { display: "select" })}>
                            Phone Number
                        </TableCell>
                    </TableHeader>
                    <TableBody
                        textAlign={options("textAlign", {left: "left", center: "center", right: "right"}, undefined, {display: "select"})}
                        fontSize={text("fontSize", undefined)}
                    >
                        <DataTableCell
                            width={options("column 1 weighting", this.generateWeightingOptions(), undefined, {display: "select"})}
                            getContent={(r: HumanRow) => r.firstName}
                        />
                        <DataTableCell
                            width={options("column 2 weighting", this.generateWeightingOptions(), undefined, {display: "select"})}
                            getContent={(r: HumanRow) => r.lastName}
                        />
                        <DataTableCell width={options("column 3 weighting", this.generateWeightingOptions(), undefined, { display: "select" })} getContent={(r: HumanRow) => r.dob.toLocaleString()}/>
                        <DataTableCell width={options("column 4 weighting", this.generateWeightingOptions(), undefined, { display: "select" })} getContent={(r: HumanRow) => r.country}/>
                        <DataTableCell width={options("column 5 weighting", this.generateWeightingOptions(), undefined, { display: "select" })} getContent={(r: HumanRow) => r.phoneNumber}/>
                    </TableBody>
                </Table>
            </PdfContainer>
        )
    }
}
