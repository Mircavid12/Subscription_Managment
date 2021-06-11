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
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring';
import TextField from '@material-ui/core/TextField';

const columns = [
    { id: 'item', label: 'Item', minWidth: 50, align: 'center' },
    {
        id: 'plan',
        label: 'Plan',
        minWidth: 110,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'price',
        label: 'Price',
        minWidth: 110,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'card',
        label: 'Card',
        minWidth: 110,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'sub_date',
        label: 'Subscription date',
        minWidth: 110,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'website',
        label: 'Website',
        minWidth: 110,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'isActive',
        label: 'Status',
        minWidth: 110,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'deactive_date',
        label: 'Deactivate date',
        minWidth: 110,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
];

function createData(item, plan, price, card, sub_date, website, isActive, deactive_date) {
    return { item, plan, price, card, sub_date, website, isActive, deactive_date };
}

const rows = [
    createData('Ailə tv', 'monthly', `${120} AZN`, 4141121232423454, '12.12.12', 'ailetv.az', 'active', '12.12.12'),
    createData('Ailə tv', 'monthly', `${120} AZN`, 4141121232423454, '12.12.12', 'ailetv.az', 'active', '12.12.12'),
    createData('Ailə tv', 'monthly', `${120} AZN`, 4141121232423454, '12.12.12', 'ailetv.az', 'active', '12.12.12'),
    createData('Ailə tv', 'monthly', `${120} AZN`, 4141121232423454, '12.12.12', 'ailetv.az', 'active', '12.12.12'),
    createData('Ailə tv', 'monthly', `${120} AZN`, 4141121232423454, '12.12.12', 'ailetv.az', 'active', '12.12.12'),
    createData('Ailə tv', 'monthly', `${120} AZN`, 4141121232423454, '12.12.12', 'ailetv.az', 'active', '12.12.12'),
    createData('Ailə tv', 'monthly', `${120} AZN`, 4141121232423454, '12.12.12', 'ailetv.az', 'active', '12.12.12'),
    createData('Ailə tv', 'monthly', `${120} AZN`, 4141121232423454, '12.12.12', 'ailetv.az', 'active', '12.12.12'),
    createData('Ailə tv', 'monthly', `${120} AZN`, 4141121232423454, '12.12.12', 'ailetv.az', 'active', '12.12.12'),
    createData('Ailə tv', 'monthly', `${120} AZN`, 4141121232423454, '12.12.12', 'ailetv.az', 'active', '12.12.12'),
    createData('Ailə tv', 'monthly', `${120} AZN`, 4141121232423454, '12.12.12', 'ailetv.az', 'active', '12.12.12'),
    createData('Ailə tv', 'monthly', `${120} AZN`, 4141121232423454, '12.12.12', 'ailetv.az', 'active', '12.12.12'),
    createData('Ailə tv', 'monthly', `${120} AZN`, 4141121232423454, '12.12.12', 'ailetv.az', 'active', '12.12.12'),
    createData('Ailə tv', 'monthly', `${120} AZN`, 4141121232423454, '12.12.12', 'ailetv.az', 'active', '12.12.12'),
    createData('Ailə tv', 'monthly', `${120} AZN`, 4141121232423454, '12.12.12', 'ailetv.az', 'active', '12.12.12'),
    createData('Ailə tv', 'monthly', `${120} AZN`, 4141121232423454, '12.12.12', 'ailetv.az', 'active', '12.12.12'),
    createData('Ailə tv', 'monthly', `${120} AZN`, 4141121232423454, '12.12.12', 'ailetv.az', 'active', '12.12.12'),
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
function SubscriptionList() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [isActive, setIsActive] = React.useState(true);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleActivate = () => {
        setIsActive(true);
    };
    const handleDeActivate = () => {
        setIsActive(false);
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
                    <button type="button" className="btn btn-success" onClick={handleOpen} style={{ float: 'left', marginLeft: '20px', margin: '20px' }}>New Subscription</button>
                    <Modal
                        aria-labelledby="spring-modal-title"
                        aria-describedby="spring-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <div className={classes.paper}>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Item</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Plan</label>
                                        <select class="form-select form-select-lg" style={{padding:'6px',borderRadius:'3px', width:'100%',margin:'6px 0'}} aria-label=".form-select-lg example">
                                            <option selected>Select your plan</option>
                                            <option value="1">Monthly</option>
                                            <option value="2">Yearly</option>
                                            <option value="3">Free</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <input type="hidden" name="isactive" value="true" />
                                        </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Card</label>
                                        <select class="form-select form-select-lg" style={{padding:'6px',borderRadius:'3px', width:'100%',margin:'6px 0'}} aria-label=".form-select-lg example">
                                            <option selected>Select payment card</option>
                                            <option value="1">41789234561243</option>
                                            <option value="2">41789234561243</option>
                                            <option value="3">41789234561243</option>
                                        </select>
                                    </div>
                                    <div className="mb-3" style={{ marginTop: '5px',marginBottom:'5px' }}>
                                        <label htmlFor="exampleInputEmail1" className="form-label">Subscription date</label>
                                        <br />
                                        <TextField
                                            style={{width:"100%"}}
                                            id="date"
                                            type="date"
                                            defaultValue="2017-05-24"
                                            className={classes.textField}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Website</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
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
                                    <TableCell key={5} align="center"
                                        style={{ minWidth: 110 }}>
                                        Settings
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    </TableCell>
                                                );
                                            })}
                                            <TableCell align='center'>
                                                {isActive ?
                                                    (<Button variant="contained" color="secondary" onClick={handleDeActivate}>
                                                        Deactivate
                                                    </Button>)
                                                    :
                                                    (<Button variant="contained" color="primary" onClick={handleActivate}>
                                                        Activate
                                                    </Button>)}
                                            </TableCell>
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

export default SubscriptionList
