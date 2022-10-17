// eslint-disable-next-line
import * as dataFormat from 'pages/CRUD/Participanti/table/ParticipantiDataFormatters';

// eslint-disable-next-line
import * as indicatoriDataFormat from 'pages/CRUD/Indicatori/table/IndicatoriDataFormatters';
// eslint-disable-next-line
import * as usersDataFormat from 'pages/CRUD/Users/table/UsersDataFormatters';
// eslint-disable-next-line
import * as cursuriDataFormat from 'pages/CRUD/Cursuri/table/CursuriDataFormatters';

import actions from 'store/actions/participanti/participantiListActions';
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { uniqueId } from 'lodash';
import { useHistory } from 'react-router';

import {
  Form,
  FormGroup,
  Input,
  Label,
  Col,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import ToolkitProvider, { Search  } from 'react-bootstrap-table2-toolkit';
import filterFactory, { Comparator, dateFilter } from 'react-bootstrap-table2-filter';

import paginationFactory from 'react-bootstrap-table2-paginator';

import Widget from 'components/Widget';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';


const { SearchBar } = Search;


const ParticipantiTable = () => {
  const [filters, setFilters] = React.useState<any[]>([
    { label: 'Nume', title: 'Nume' },
    { label: 'Prenume', title: 'Prenume' },
    { label: 'Intrare', title: 'INTRARE', number: 'true' },
    { label: 'Iesire', title: 'IESIRE', number: 'true' },
    { label: 'Status', title: 'Status' },
  ]);
  const [filterItems, setFilterItems] = React.useState<
    {
      [rest: string]: any;
      
    }[]
  >([]);
  const [currPage, setCurrPage] = React.useState(1);
  const [sizePerPage, setSizePerPage] = React.useState(10);
  const [searchValue, setSearchValue] = React.useState(10);
  const [width, setWidth] = React.useState(window.innerWidth);

  const loading = useTypedSelector((store) => store.participanti.list.loading);
  const rows = useTypedSelector((store) => store.participanti.list.rows);
  const count = useTypedSelector((store) => store.participanti.list.count);
  const modalOpen = useTypedSelector((store) => store.participanti.list.modalOpen);
  const idToDelete = useTypedSelector((store) => store.participanti.list.idToDelete);

  const dispatch = useDispatch();
  const history = useHistory();

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };

  React.useEffect(() => {
    dispatch(actions.doFetch({ limit: sizePerPage, page: currPage }));
  }, [dispatch, currPage, sizePerPage]);

  React.useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  const actionFormatter = (cell: string) => {
    return (
      <div>
        {null && (
          <Button
            color="default"
            size="xs"
            onClick={() => dispatch(push(`/admin/participanti/${cell}`))}
          >
            View
          </Button>
        )}
        <Button
          color="info"
          size="xs"
          onClick={() => history.push(`/admin/participanti/${cell}/edit`)}
        >
          Edit
        </Button>
        &nbsp;&nbsp;
        <Button
          color="danger"
          size="xs"
          onClick={(event: React.MouseEvent) => openModal(event, cell)}
        >
          Delete
        </Button>
      </div>
    );
  };

  const columns: Array<any> = [
    
    {
      dataField: 'Id',
      sort: true,
      hidden: true,
      text: 'Id',
    },
    {
      dataField: 'Partener',
      sort: true,
      hidden: true,
      text: 'Partener',
    },
    
    {
      dataField: 'Nume',
      sort: true,

      text: 'Nume',
    },

    {
      dataField: 'Prenume',
      sort: true,

      text: 'Prenume',
    },

    {
      dataField: 'Cnp',
      sort: true,

      text: 'Cnp',
    },
    {
      dataField: 'Adresa',
      sort: true,
      hidden: true,
      text: 'Adresa',
      
    },

    {
        dataField: 'Gen',
        sort: true,
        hidden: true,
        text: 'Gen',
      },
      {
        dataField: 'Nationalitate',
        sort: true,
        hidden: true,
        text: 'Nationalitate',
      },

      {
        dataField: 'Judet',
        sort: true,
        hidden: true,
        text: 'Judet',
      },

      {
        dataField: 'Domiciliul',
        sort: true,
        hidden: true,
        text: 'Domiciliul',
      },
      {
        dataField: 'Companie',
        sort: true,
        hidden: true,
        text: 'Companie',
      },
      {
        dataField: 'Domeniu',
        sort: true,
        hidden: true,
        text: 'Domeniu',
      },
      {
        dataField: 'Functie',
        sort: true,
        hidden: true,
        text: 'Functie',
      },
      {
        dataField: 'Statut',
        sort: true,
        hidden: true,
        text: 'Statut',
      },
    {
      dataField: 'INTRARE',
      sort: true,

      text: 'INTRARE',
    },

    {
      dataField: 'IESIRE',
      sort: true,

      text: 'IESIRE',
    },

    {
      dataField: 'INDICATORI',
      sort: true,

      formatter: indicatoriDataFormat.listFormatter,

      text: 'INDICATORI',
    },
    {
      dataField: 'ELIGIBILITATE',
      sort: true,
      hidden: true,
      text: 'ELIGIBILITATE',
      
    },
    {
      dataField: 'BFA',
      sort: true,
     
      text: 'BFA',
      
    },

    {
      dataField: 'Cursuri',
      sort: true,

      formatter: cursuriDataFormat.listFormatter,

      text: 'Cursuri',
    },
    {
      dataField: 'Status',
      sort: true,
      
      text: 'Status',
    },
    {
      dataField: 'id',
      text: 'Actions',
      formatter: actionFormatter,
    },
    {
      dataField: 'Pocu',
      sort: true,
      hidden: true,
      text: 'Pocu',
    },
   
    {
      dataField: 'Varsta',
      sort: true,
      hidden: true,
      text: 'Varsta',
    },
  ];

  const handleChange = (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    const index = filterItems.findIndex((item: any) => item.id === id);
    let obj: { [name: string]: any } = filterItems[index];
    obj.fields[name] = value;
    obj.id = id;
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let request = '&';
    filterItems.forEach((item) => {
      filters[
        filters.map((filter) => filter.title).indexOf(item.fields.selectedField)
      ].hasOwnProperty('number')
        ? (request += `${item.fields.selectedField}Range=${item.fields.filterValueFrom}&${item.fields.selectedField}Range=${item.fields.filterValueTo}&`)
        : (request += `${item.fields.selectedField}=${item.fields.filterValue}&`);
    });
    dispatch(actions.doFilter(request, { limit: 10, page: 1 }));
    setCurrPage(1);
    setSizePerPage(10);
  };

  const handleReset = () => {
    setFilterItems([]);
    dispatch(actions.doFetch({ limit: 10, page: 1 }));
  };

  const addFilter = () => {
    let newItem = {
      id: uniqueId(),
      fields: {
        filterValue: '',
        filterValueFrom: '',
        filterValueTo: '',
        selectedField: '',
      },
    };
    newItem.fields.selectedField = filters[0].title;
    setFilterItems([...filterItems, newItem]);
  };

  const deleteFilter = (value: string) => (e: React.FormEvent) => {
    e.preventDefault();
    const newItems = filterItems.filter((item) => item.id !== value);
    if (newItems.length) {
      setFilterItems(newItems);
    } else {
      dispatch(actions.doFetch({ limit: 10, page: 1 }));
      setFilterItems(newItems);
    }
  };

  const handleDelete = () => {
    const id = idToDelete;
    dispatch(actions.doDelete(id!, { limit: sizePerPage, page: currPage }));
  };

  const openModal = (event: React.MouseEvent, cell: string) => {
    const id = cell;
    event.stopPropagation();
    dispatch(actions.doOpenConfirm(id));
  };

  const closeModal = () => {
    dispatch(actions.doCloseConfirm());
  };

  const pageButtonRenderer = ({
    page,
    onPageChange,
  }: {
    page: number | string;
    onPageChange: Function;
  }) => {
    const handleClick = (e: React.FormEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (page === '>') {
        setCurrPage((prevState) => prevState + 1);
        onPageChange(page);
        return;
      } else if (page === '<') {
        setCurrPage((prevState) => prevState - 1);
        onPageChange(page);
        return;
      }
      setCurrPage(+page);
      onPageChange(page);
    };
    return (
      <li className="page-item" key={page}>
        <a href="#" className="page-link" onClick={handleClick}>
          {page}
        </a>
      </li>
    );
  };

  const pagination = paginationFactory({
    pageButtonRenderer,
    onSizePerPageChange: (sizePerPage, page) => setSizePerPage(sizePerPage),
    totalSize: Math.ceil(count / sizePerPage) * sizePerPage,
  });


  const MyExportCSV = (props: { onExport: (arg0: any) => void; }) => {
    const handleClickk = () => {
      // passing my custom data
      
      props.onExport (rows.map(item => ({
        
        Partener:item.Partener,
        Nume: item.Nume,
        Prenume: item.Prenume,
        Cnp: item.Cnp,
        Varsta:item.Varsta,
        Adresa: item.Adresa,
        Judet:item.Judet,
        Domiciliul:item.Domiciliul,
        Gen: item.Gen,
        Nationalitate: item.Nationalitate,
        Companie:item.Companie,
        Domeniu:item.Domeniu,
        Functie:item.Functie,
        Statut:item.Statut,
        ISCED:item.ISCED,

        INDICATORI: item.INDICATORI.map((role: { Nume: any; }) => role.Nume),
        Cursuri: item.Cursuri.map((curs: { Nume: any; }) => curs.Nume),
        Pocu: item.Pocu,
        BFA: item.BFA,
        ELIGIBILITATE:item.ELIGIBILITATE,
        INTRARE: item.INTRARE,
        IESIRE: item.IESIRE,
        Id:item.id,
        Status:item.Status
      }))
  
    )};



    return (
      <div>
        <button className="btn btn-success" onClick={ handleClickk }>Export excel</button>
      </div>
    );
  };


  return (
    <div>
      <Widget title={<h4>Participanti</h4>} collapse close>
      <Link to="/admin/participanti/new">
          <button className="btn btn-primary" type="button">
            New
          </button>
        </Link>
        <button className="btn btn-primary ml-3" type="button" onClick={addFilter}>
          Add Filter
        </button>
        <Form onSubmit={handleSubmit}>
          {filterItems.map((item) => (
            // @ts-ignore
            <Row form className="mt-3" key={item.id}>
              <Col xs={4} md={4} lg={3}>
                <FormGroup>
                  <Label for="selectedField">Field</Label>
                  <Input
                    type="select"
                    name="selectedField"
                    id="selectedField"
                    defaultValue={item.fields.selectedField}
                    onChange={handleChange(item.id)}
                  >
                    {filters.map((selectOption) => (
                      <option key={selectOption.title} value={`${selectOption.title}`}>
                        {selectOption.label}
                      </option>
                    ))}
                  </Input>
                </FormGroup>
              </Col>

              <Col xs={4} md={4} lg={3} className="ml-0 ml-md-4">
                {filters[
                  filters.map((filter) => filter.title).indexOf(item.fields.selectedField)
                ].hasOwnProperty('number') ? (
                  // @ts-ignore
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label for="filterValueFrom">From</Label>
                        <Input
                          type="date"
                          defaultValue={item.fields.filterValueFrom}
                          name="filterValueFrom"
                          id="filterValueFrom"
                          onChange={handleChange(item.id)}
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <Label for="filterValueTo">To</Label>
                        <Input
                          type="date"
                          defaultValue={item.fields.filterValueTo}
                          name="filterValueTo"
                          id="filterValueTo"
                          onChange={handleChange(item.id)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                ) : (
                  <>
                    <FormGroup>
                      <Label for="filterValue">Contains</Label>
                      <Input
                        type="text"
                        defaultValue={item.fields.filterValue}
                        name="filterValue"
                        id="filterValue"
                        onChange={handleChange(item.id)}
                      />
                    </FormGroup>
                  </>
                )}
              </Col>
              <Col xs={3} md={3} lg={2} className="align-self-center">
                <button className="btn btn-danger ml-3 mt-2" onClick={deleteFilter(item.id)}>
                  Delete
                </button>
              </Col>
            </Row>
          ))}
          {filterItems.length > 0 && (
            // @ts-ignore
            <Row>
              <Col xs={12} lg={3} className="align-self-end mb-3">
                <button type="submit" className="btn btn-primary" value="Submit">
                  Apply
                </button>
                <button
                  type="reset"
                  className="btn btn-danger ml-3"
                  value="Reset"
                  onClick={handleReset}
                >
                  Clear
                </button>
              </Col>
            </Row>
          )}
        </Form>
       



        
        
      </Widget>
      
      <ToolkitProvider columns={columns} data={rows} keyField="id" exportCSV={ {
    fileName: 'A21.csv'
  } }
        
        
        search >
          {(props ) => (
            <>
            <MyExportCSV { ...props.csvProps } />
              <SearchBar className="react-bootstrap-table-search-input" {...props.searchProps} />
              
              <BootstrapTable
                bordered={false}
               
                classes={`table-striped table-hover mt-4 ${width < 1150 ? 'table-responsive' : ''}`}
                // @ts-ignore
                pagination={count && pagination}
                {...props.baseProps}
              />
            </>
          )}
          
        </ToolkitProvider>
       

      <Modal size="sm" isOpen={modalOpen} toggle={() => closeModal()}>
        <ModalHeader toggle={() => closeModal()}>Confirm delete</ModalHeader>
        <ModalBody className="bg-white">Are you sure you want to delete this item?</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => closeModal()}>
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDelete()}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ParticipantiTable;
