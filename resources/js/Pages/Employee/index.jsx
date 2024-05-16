import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
// import TableHeading from "@/Components/TableHeading";
import TableHeading from "@/Components/TableHeading";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";


export default function Index({auth,employees,queryParams = null}){
    queryParams = queryParams || {};
    const searchFieldChanged = (name, value) => {
      if (value) {
        queryParams[name] = value;
      } else {
        delete queryParams[name];
      }
  
      router.get(route("employee.index"), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;
    
        searchFieldChanged(name, e.target.value);
      };
    
      const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
          if (queryParams.sort_direction === "asc") {
            queryParams.sort_direction = "desc";
          } else {
            queryParams.sort_direction = "asc";
          }
        } else {
          queryParams.sort_field = name;
          queryParams.sort_direction = "asc";
        }
        router.get(route("employee.index"), queryParams);
      };
    
      const deleteEmployee = (employee) => {
        if (!window.confirm("Sure about delete it?")) {
          return;
        }
        router.delete(route("employee.destroy", employee.id));
      };

    return(
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Employees
                </h2>
            }
        >
            <Head title="Employees" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {/* <pre>{JSON.stringify(employees,undefined,2)}</pre> */}
                            <div className="overflow-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">                            
                                    <TableHeading
                                        name="service_id"
                                        sort_field={queryParams.sort_field}
                                        sort_direction={queryParams.sort_direction}
                                        sortChanged={sortChanged}
                                    >
                                        Servicio
                                    </TableHeading>
{/*                                     {/* {/* <th className="px-3 py-3"> */}
                                    <TableHeading
                                        name="ci"
                                        sort_field={queryParams.sort_field}
                                        sort_direction={queryParams.sort_direction}
                                        sortChanged={sortChanged}
                                    >
                                        CI
                                    </TableHeading>
                                    <TableHeading
                                        name="name"
                                        sort_field={queryParams.sort_field}
                                        sort_direction={queryParams.sort_direction}
                                        sortChanged={sortChanged}
                                    >
                                        Name
                                    </TableHeading>
                                    <TableHeading
                                        name="paternal_surname"
                                        sort_field={queryParams.sort_field}
                                        sort_direction={queryParams.sort_direction}
                                        sortChanged={sortChanged}
                                    >
                                        Paternal Surname
                                    </TableHeading>
                                    <TableHeading
                                        name="maternal_surname"
                                        sort_field={queryParams.sort_field}
                                        sort_direction={queryParams.sort_direction}
                                        sortChanged={sortChanged}
                                    >
                                        Maternal Surname
                                    </TableHeading>
                                    <TableHeading
                                        name="address"
                                        sort_field={queryParams.sort_field}
                                        sort_direction={queryParams.sort_direction}
                                        sortChanged={sortChanged}
                                    >
                                        Address
                                    </TableHeading>
                                    <TableHeading
                                        name="phone"
                                        sort_field={queryParams.sort_field}
                                        sort_direction={queryParams.sort_direction}
                                        sortChanged={sortChanged}
                                    >
                                        Phone
                                    </TableHeading>
{/* 
                                    </th> */}
                                    {/* <th className="px-3 py-3">CREATED</th> */}
                                    {/* <TableHeading
                                        name="created_at"
                                        sort_field={queryParams.sort_field}
                                        sort_direction={queryParams.sort_direction}
                                        sortChanged={sortChanged}
                                    >
                                        CREATED
                                    </TableHeading>
                                    <TableHeading
                                        name="updated_at"
                                        sort_field={queryParams.sort_field}
                                        sort_direction={queryParams.sort_direction}
                                        sortChanged={sortChanged}
                                    >
                                        UPDATED
                                    </TableHeading> */}

                                    {/* <th className="px-3 py-3">UPDATED</th> */}
                                    <th className="px-3 py-3 text-right">Actions</th> 

                                    </tr>
                                </thead>
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                    <tr className="text-nowrap">
                                    {/* <th className="px-3 py-3"></th>
                                    <th className="px-3 py-3"></th> */}
                                    <th className="px-3 py-3">
                                    <SelectInput
                                        className="w-full"
                                        defaultValue={queryParams.status}
                                        onChange={(e) =>
                                            searchFieldChanged("service", e.target.value)
                                        }
                                        />
                                    </th>
                                    <th className="px-3 py-3">

                                      <TextInput
                                        className="w-full"
                                        defaultValue={queryParams.ci}
                                        placeholder="Employee CI"
                                        onBlur={(e) =>
                                            searchFieldChanged('ci', e.target.value)
                                        }
                                        onKeyPress={(e) => onKeyPress('ci', e)}
                                        /> 
                                    </th>
                                    <th className="px-3 py-3"> 
                                        <TextInput
                                        className="w-full"
                                        defaultValue={queryParams.name}
                                        placeholder="Employee Name"
                                        onBlur={(e) =>
                                            searchFieldChanged('name', e.target.value)
                                        }
                                        onKeyPress={(e) => onKeyPress('name', e)}
                                        /> 
                                    </th>
                                    <th className="px-3 py-3">
                                        <TextInput
                                        className="px-3 py-2"
                                        defaultValue={queryParams.paternal_surname}
                                        placeholder="Employee Paternal Surname"
                                        onBlur={(e) =>
                                            searchFieldChanged('paternal_surname', e.target.value)
                                        }
                                        onKeyPress={(e) => onKeyPress('paternal_surname', e)}
                                        /> 
                                   </th>
                                    <th className="px-3 py-3">
                                        <TextInput
                                        className="px-3 py-2"
                                        defaultValue={queryParams.paternal_surname}
                                        placeholder="Employee Maternal Surname"
                                        onBlur={(e) =>
                                            searchFieldChanged('maternal_surname', e.target.value)
                                        }
                                        onKeyPress={(e) => onKeyPress('maternal_surname', e)}
                                        /> 
                                    </th>
                                    <th className="px-3 py-3">
                                        <TextInput
                                        className="px-3 py-2"
                                        defaultValue={queryParams.address}
                                        placeholder="Employee Address"
                                        onBlur={(e) =>
                                            searchFieldChanged('address', e.target.value)
                                        }
                                        onKeyPress={(e) => onKeyPress('address', e)}
                                        /> 
                                    </th>
                                    <th className="px-3 py-3">
                                        <TextInput
                                        className="px-3 py-2"
                                        defaultValue={queryParams.phone}
                                        placeholder="Employee Phone"
                                        onBlur={(e) =>
                                            searchFieldChanged('phone', e.target.value)
                                        }
                                        onKeyPress={(e) => onKeyPress('phone', e)}
                                        /> 
                                    </th>
                                    <th className="px-3 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.data.map((employee) => (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                        key={employee.id}>
                                        {/* <td className="px-3 py-2">{employee.id}</td> */}
                                        <td className="px-3 py-2">{employee.service.name}</td>
                                        <td className="px-3 py-2">{employee.ci}</td>
                                        <td className="px-3 py-2">{employee.name}</td>
                                        <td className="px-3 py-2">{employee.paternal_surname}</td>
                                        <td className="px-3 py-2">{employee.maternal_surname}</td>
                                        <td className="px-3 py-2">{employee.address}</td>
                                        <td className="px-3 py-2">{employee.phone}</td>
                                        {/* <td className="px-3 py-2">{employee.created_at}</td>
                                        <td className="px-3 py-2">{employee.updated_at}</td> */}
                                        <td className="px-3 py-2 text-right">
                                        <Link
                                            href={route("employee.edit", employee.id)}
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            onClick={(e) => deleteEmployee(employee)}
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
                                <Pagination links={employees.meta.links}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}