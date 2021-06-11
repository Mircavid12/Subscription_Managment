import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const columns = [
    { id: 'card_name', label: 'Card name', minWidth: 50, align: 'center' },
    {
        id: 'card_number',
        label: 'Card number',
        minWidth: 110,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'type',
        label: 'Type',
        minWidth: 110,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'expire_date',
        label: 'Expire date',
        minWidth: 110,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
];

function createData(card_name, card_number, type, expire_date) {
    return { card_name, card_number, type, expire_date };
}

const rows = [
    createData('Paşa Bank', '4169903245823475', 'Visa', 3287263),
    createData('Kapital Bank', '4169903245823475', 'Visa', 3287263),
    createData('Yelo Bank', '4169903245823475', 'Master', 3287263),
    createData('Access Bank', '4169903245823475', 'Visa', 3287263),
    createData('Express Bank', '4169903245823475', 'Master', 3287263),
    createData('Beynəlxalq Bank', '4169903245823475', 'Visa', 3287263),
    createData('Paşa Bank', '4169903245823475', 'Visa', 3287263),
    createData('Paşa Bank', '4169903245823475', 'Visa', 3287263),
    createData('Paşa Bank', '4169903245823475', 'Visa', 3287263),
    createData('Paşa Bank', '4169903245823475', 'Visa', 3287263),
    createData('Paşa Bank', '4169903245823475', 'Visa', 3287263),
    createData('Paşa Bank', '4169903245823475', 'Visa', 3287263),
    createData('Paşa Bank', '4169903245823475', 'Visa', 3287263),
    createData('Paşa Bank', '4169903245823475', 'Visa', 3287263),
    createData('Paşa Bank', '4169903245823475', 'Visa', 3287263),
    createData('Paşa Bank', '4169903245823475', 'Visa', 3287263),
    createData('Paşa Bank', '4169903245823475', 'Visa', 3287263),
    createData('Paşa Bank', '4169903245823475', 'Visa', 3287263),
    createData('Paşa Bank', '4169903245823475', 'Visa', 3287263),
    createData('Paşa Bank', '4169903245823475', 'Visa', 3287263),
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};


function CardList() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [openEdit, setOpenEdit] = React.useState(false);
    const [openAdd, setOpenAdd] = React.useState(false);

    const handleOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false)
    };
    const handleOpenAdd = () => {
        setOpenAdd(true);
    };

    const handleCloseAdd = () => {
        setOpenAdd(false)
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <div className="page-containeaaar">
            <div className="left-content">
                <Paper className={classes.root}>
                    <button type="button" className="btn btn-success" onClick={handleOpenAdd} style={{ float: 'left', marginLeft: '20px', margin: '20px' }}>Add new card</button>
                    <Modal
                        aria-labelledby="spring-modal-title"
                        aria-describedby="spring-modal-description"
                        className={classes.modal}
                        open={openAdd}
                        onClose={handleCloseAdd}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={openAdd}>
                            <div className={classes.paper}>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Card name</label>
                                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Card number</label>
                                        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <label htmlFor="exampleInputEmail1" className="form-label">Type</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    <div className="mb-3" style={{marginTop:'5px'}}>
                                    <label htmlFor="exampleInputEmail1" className="form-label">Expire Date</label>
                                    <br />
                                        <TextField
                                            id="date"
                                            type="date"
                                            defaultValue="2017-05-24"
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ marginLeft: '50%', transform: 'translateX(-50%)', marginTop: '30px' }}>Add</button>
                                </form>
                            </div>
                        </Fade>
                    </Modal>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                    <TableCell align="center"
                                        style={{ minWidth: 110 }}>
                                        Settings
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,idx) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number' ? column.format(value) : value}

                                                    </TableCell>
                                                );
                                            })}
                                            <TableCell align='center'>
                                                <Button variant="contained" color="primary" onClick={handleOpenEdit}>
                                                    Edit
                                                </Button>
                                                <Button variant="contained" color="secondary">
                                                    Delete
                                                </Button>
                                            </TableCell>
                                            <Modal
                                                aria-labelledby="spring-modal-title"
                                                aria-describedby="spring-modal-description"
                                                className={classes.modal}
                                                open={openEdit}
                                                onClose={handleCloseEdit}
                                                closeAfterTransition
                                                BackdropComponent={Backdrop}
                                                BackdropProps={{
                                                    timeout: 500,
                                                }}
                                            >
                                                <Fade in={openEdit}>
                                                    <div className={classes.paper}>
                                                        <h2 id="spring-modal-title">Cards</h2>
                                                        <p id="spring-modal-description">react-spring animates me.</p>
                                                    </div>
                                                </Fade>
                                            </Modal>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
        </div>
    )
}

export default CardList
