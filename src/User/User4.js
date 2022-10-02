// Nested List with Nested Arrays

import Table from 'react-bootstrap/Table';

function User4() {
    const students = [{
        name: "ayushi", email: "ayushi@gmail.com", contact: "000", address: [
            { Hn: "00", city: "Bina", country: "India" }
        ]
    },
    {
        name: "ayushi1", email: "ayushi1@gmail.com", contact: "001", address: [
            { Hn: "01", city: "Bina", country: "India" }
        ]
    },
    {
        name: "ayushi2", email: "ayushi2@gmail.com", contact: "002", address: [
            { Hn: "02", city: "Bina", country: "India" }
        ]
    },
    {
        name: "ayushi3", email: "ayushi3@gmail.com", contact: "003", address: [
            { Hn: "03", city: "Bina", country: "India" }
        ]
    }]
    return (
        <>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contact</td>
                        <td>Address</td>
                    </tr>
                </tbody>{
                    students.map((item, i) =>
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.contact}</td>
                            <td>{
                                <Table striped bordered hover variant="dark">
                                    <tbody>
                                        <tr>
                                            <td>House No.</td>
                                            <td>City</td>
                                            <td>Country</td>
                                        </tr>
                                    </tbody>{
                                        item.address.map((data, j) =>
                                            <tr key={j}>
                                                <td>{data.Hn}</td>
                                                <td>{data.city}</td>
                                                <td>{data.country}</td>

                                            </tr>)
                                    }
                                </Table>
                            }</td>

                        </tr>
                    )
                }
            </Table>
        </>
    );
}

export default User4;