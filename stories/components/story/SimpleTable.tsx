import * as React from "react";
import {DataTableCell, Table, TableBody, TableCell, TableHeader} from "../../../src";
import {PdfContainer} from "../PdfContainer";
import {generateRandomData, HumanRow} from "../../data/Humans";

interface SimpleTableHeaderState {
    data: HumanRow[];
}

export class SimpleTable extends React.Component<{}, SimpleTableHeaderState> {
    state = {
        data: generateRandomData(200)
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
                            Phone Number
                        </TableCell>
                    </TableHeader>
                    <TableBody>
                        <DataTableCell width="20%" getContent={(r: HumanRow) => r.firstName}/>
                        <DataTableCell width="20%" getContent={(r: HumanRow) => r.lastName}/>
                        <DataTableCell width="20%" getContent={(r: HumanRow) => r.dob.toLocaleString()}/>
                        <DataTableCell width="20%" getContent={(r: HumanRow) => r.country}/>
                        <DataTableCell width="20%" getContent={(r: HumanRow) => r.phoneNumber}/>
                    </TableBody>
                </Table>
            </PdfContainer>
        )
    }
}
