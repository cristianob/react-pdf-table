import * as React from "react";
import {generateRandomData, HumanRow} from "../../data/Humans";
import {PdfContainer} from "../PdfContainer";
import {DataTableCell, Table, TableBody, TableCell, TableHeader} from "../../../src";

interface NestedTablesState {
    data: HumanRow[];
}

export class NestedTables extends React.Component<void, NestedTablesState> {
    state = {
        data: generateRandomData(20)
    };

    render() {
        return (
            <PdfContainer>
                <Table
                    data={this.state.data}
                >
                    <TableHeader>
                        <TableCell width="20%">
                            First Name
                        </TableCell>
                        <TableCell width="20%">
                            Last Name
                        </TableCell>
                        <TableCell width="20%">
                            DOB
                        </TableCell>
                        <TableCell width="20%">
                            Country
                        </TableCell>
                        <TableCell width="20%">
                            <Table>
                                <TableHeader
                                    fontSize={8}
                                    textAlign={"center"}
                                    includeTopBorder={false}
                                    includeBottomBorder={false}
                                    includeLeftBorder={false}
                                    includeRightBorder={false}
                                >
                                    <TableCell width="25%">One</TableCell>
                                    <TableCell width="25%">Two</TableCell>
                                    <TableCell width="25%">Three</TableCell>
                                    <TableCell width="25%">Four</TableCell>
                                </TableHeader>
                            </Table>
                        </TableCell>
                    </TableHeader>
                    <TableBody>
                        <DataTableCell width="20%" getContent={(r: HumanRow) => r.firstName}/>
                        <DataTableCell width="20%" getContent={(r: HumanRow) => r.lastName}/>
                        <DataTableCell width="20%" getContent={(r: HumanRow) => r.dob.toLocaleString()}/>
                        <DataTableCell width="20%" getContent={(r: HumanRow) => r.country}/>
                        <DataTableCell width="20%" getContent={(r: HumanRow) => (
                            <Table
                                data={[r]}
                            >
                                <TableBody
                                    textAlign={"center"}
                                    includeTopBorder={false}
                                    includeBottomBorder={false}
                                    includeLeftBorder={false}
                                    includeRightBorder={false}
                                >
                                    <DataTableCell width="25%" getContent={(r: HumanRow) => r.randomValues.one.toString()}/>
                                    <DataTableCell width="25%" getContent={(r: HumanRow) => r.randomValues.two.toString()}/>
                                    <DataTableCell width="25%" getContent={(r: HumanRow) => r.randomValues.three.toString()}/>
                                    <DataTableCell width="25%" getContent={(r: HumanRow) => r.randomValues.four.toString()}/>
                                </TableBody>
                            </Table>
                        )}/>
                    </TableBody>
                </Table>
            </PdfContainer>
        )
    }
}
