import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from '@inertiajs/react';

export default function Index({auth,services}){
    return(
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Services
                </h2>
            }
        >
            <Head title="Service" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {/* <pre>{JSON.stringify(services,undefined,2)}</pre> */}
                            <div className="overflow-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">                            
                                    <th className="px-3 py-3">ID</th>
                                    <th className="px-3 py-3">NAME</th>
                                    <th className="px-3 py-3">CREATED</th>
                                    <th className="px-3 py-3">UPDATED</th>
                                    <th className="px-3 py-3 text-right">Actions</th> 

                                    </tr>
                                </thead>
                                {/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                    <th className="px-3 py-3"></th>
                                    <th className="px-3 py-3"></th>
                                    <th className="px-3 py-3"></th>
                                    <th className="px-3 py-3"></th>
                                    <th className="px-3 py-3"></th>
                                    <th className="px-3 py-3"></th>
                                    </tr>
                                </thead> */}
                                <tbody>
                                    {services.data.map((service) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        key={service.id}>
                                        <td className="px-3 py-2">{service.id}</td>
                                        <td className="px-3 py-2">{service.name}</td>
                                        <td className="px-3 py-2">{service.created_at}</td>
                                        <td className="px-3 py-2">{service.updated_at}</td>
                                        <td className="px-3 py-3 text-right">
                                        <Link
                                            href={route("service.edit", service.id)}
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={(e) => deleteProject(service)}
                                            className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                        >
                                            Delete  
                                        </button>
                                        </td>
                                        {/* </td> */}
                                    </tr>
                                    ))}
                                </tbody>
                                </table>
                                <Pagination links={services.meta.links}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}