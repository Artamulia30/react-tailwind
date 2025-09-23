import React from "react"

function Tabel() {
    const Data2 = [
        { id: 1, nama_lengkap: "putri elisabel azizah", nama_belakang: "azizah", username: "putri" },
    { id: 2, nama_lengkap: "riris rahmawati", nama_belakang: "mawati", username: "riris" },
    { id: 3, nama_lengkap: "cintiya eka putri", nama_belakang:"putri",username:"cintiya" },
]

    return (
        <>
            <table>
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
            </table>
            <table>
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
            </table>
            <table>
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
            </table>
            <table>
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
            </table>
            <table>
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
            </table>
        </>
    )
}

export default Tabel;