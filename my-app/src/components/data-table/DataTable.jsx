import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useSortBy, useTable } from "react-table";

const DataTable = ({ data, columns, identifier }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);
    
  return (
    <Box marginY="8px" background="white">
      <Table {...getTableProps()}>
        <Thead >
          {headerGroups.map((headerGroup, index) => (
            <Tr
              {...headerGroup.getHeaderGroupProps()}
              key={`${index}-tablerow`}
            >
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  isNumeric={column.isNumeric}
                  background="white"
                  paddingLeft="4.3rem"
                  textAlign="center"
                  fontWeight="300"
                  color="black.600"
                  letterSpacing={"4px"}
                  key={`${index}-tablehead`}
                >
                  {column.render("Header")}
                  <>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ChevronUpIcon
                          aria-label="sorted descending"
                          position="absolute"
                        />
                      ) : (
                        <ChevronDownIcon
                          position="absolute"
                          aria-label="sorted ascending"
                        />
                      )
                    ) : null}
                  </>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr
                {...row.getRowProps()}
                key={row.original[identifier]}
                fontSize="12"
              >
                {row.cells.map((cell) => (
                  <Td
                    {...cell.getCellProps()}
                    isNumeric={cell.column.isNumeric}
                    key={cell.column.id}
                    background="pink.100"
                    color="black"
                    fontSize={"15px"}
                    borderColor="gray"
                    paddingLeft="4.3rem"
                    textAlign="center"
                  >
                    {cell.render("Cell")}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default DataTable;
