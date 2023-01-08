import { useMemo } from "react";
import DataTable from "../../src/components/data-table/DataTable";
import { addPascalCase, addUpperCaseFirstLetter, reverseDate } from "../utils";

const UsersTable = ({ users = [] }) => {
  const memorizedColumns = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "full_name",
        Cell: ({ value }) => addPascalCase(value),
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Pais de residencia",
        accessor: "country_of_origin",
        Cell: ({ value }) => addUpperCaseFirstLetter(value),
      },
      {
        Header: "Fecha de nacimiento",
        accessor: "birth_date",
        Cell: ({ value }) => reverseDate(value),
      },
    ],
    []
  );

  return (
    <DataTable columns={memorizedColumns} data={users} identifier="users" />
  );
};

export default UsersTable;
