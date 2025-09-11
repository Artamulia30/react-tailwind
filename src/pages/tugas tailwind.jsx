import React from "react"
import { Tabel } from '@tailwind'

function Tabel() {
    const Data2 = [
        { id: 1, nama_lengkap: "putri elisabel azizah", nama_belakang: "azizah", username: "putri" }
    { id: 2, nama_lengkap: "riris rahmawati", nama_belakang: "mawati", usernamre: "riris" }
    { id: 3, nama_lengkap: "" }
    ]

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th class="border border-gray-300...">#</th>
                        <th class="border border-gray-300...">fullname</th>
                        <th class="border border-gray-300...">lastname</th>
                        <th class="border border-gray-300...">username</th>
                    </tr>
                </thead>
                <tbody>
                    {Data2.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nama_lengkap}</td>
                            <td>{item.nama_belakang}</td>
                            <td>{item.username}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Table>
                <thead>
                    <tr>
                        <th class="border border-gray-300...">#</th>
                        <th class="border border-gray-300...">fullname</th>
                        <th class="border border-gray-300...">lastname</th>
                        <th class="border border-gray-300...">username</th>
                    </tr>
                </thead>
                <tbody>
                    {Data2.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nama_lengkap}</td>
                            <td>{item.nama_belakang}</td>
                            <td>{item.username}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Table>
                <thead>
                    <tr>
                        <th class="border border-gray-300...">#</th>
                        <th class="border border-gray-300...">fullname</th>
                        <th class="border border-gray-300...">lastname</th>
                        <th class="border border-gray-300...">username</th>
                    </tr>
                </thead>
                <tbody>
                    {Data2.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nama_lengkap}</td>
                            <td>{item.nama_belakang}</td>
                            <td>{item.username}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Table>
                <thead>
                    <tr>
                        <th class="border border-gray-300...">#</th>
                        <th class="border border-gray-300...">fullname</th>
                        <th class="border border-gray-300...">lastname</th>
                        <th class="border border-gray-300...">username</th>
                    </tr>
                </thead>
                <tbody>
                    {Data2.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nama_lengkap}</td>
                            <td>{item.nama_belakang}</td>
                            <td>{item.username}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Table>
                <thead>
                    <tr>
                        <th class="border border-gray-300...">#</th>
                        <th class="border border-gray-300...">fullname</th>
                        <th class="border border-gray-300...">lastname</th>
                        <th class="border border-gray-300...">username</th>
                    </tr>
                </thead>
                <tbody>
                    {Data2.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nama_lengkap}</td>
                            <td>{item.nama_belakang}</td>
                            <td>{item.username}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default Tabel;