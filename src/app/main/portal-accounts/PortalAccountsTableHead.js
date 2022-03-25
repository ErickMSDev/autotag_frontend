import Checkbox from '@mui/material/Checkbox';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/system';
import TableHead from '@mui/material/TableHead';
import { removePortalAccounts } from '../store/portalAccountsSlice';

const rows = [
  {
    id: 'id',
    align: 'left',
    disablePadding: false,
    label: 'ID',
    sort: true,
  },
  {
    id: 'portalName',
    align: 'left',
    disablePadding: false,
    label: 'Portal',
    sort: true,
  },
  {
    id: 'run',
    align: 'left',
    disablePadding: false,
    label: 'Rut',
    sort: true,
  },
  {
    id: 'password',
    align: 'left',
    disablePadding: false,
    label: 'Contraseña',
    sort: true,
  },
  {
    id: 'active',
    align: 'left',
    disablePadding: false,
    label: 'Estado',
    sort: true,
  },
];

function PortalAccountsTableHead(props) {
  const { selectedPortalAccountIds } = props;
  const numSelected = selectedPortalAccountIds.length;

  const [selectedPortalAccountsMenu, setSelectedPortalAccountsMenu] = useState(null);

  const dispatch = useDispatch();

  const createSortHandler = (property) => (event) => {
    props.onRequestSort(event, property);
  };

  function openSelectedPortalAccountsMenu(event) {
    setSelectedPortalAccountsMenu(event.currentTarget);
  }

  function closeSelectedPortalAccountsMenu() {
    setSelectedPortalAccountsMenu(null);
  }

  return (
    <TableHead>
      <TableRow className="h-48 sm:h-64">
        <TableCell padding="none" className="w-40 md:w-64 text-center z-99">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < props.rowCount}
            checked={props.rowCount !== 0 && numSelected === props.rowCount}
            onChange={props.onSelectAllClick}
          />
          {numSelected > 0 && (
            <Box
              className="flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10 border-b-1"
              sx={{
                background: (theme) => theme.palette.background.paper,
              }}
            >
              <IconButton
                aria-owns={selectedPortalAccountsMenu ? 'selectedPortalAccountsMenu' : null}
                aria-haspopup="true"
                onClick={openSelectedPortalAccountsMenu}
                size="large"
              >
                <Icon>more_horiz</Icon>
              </IconButton>
              <Menu
                id="selectedPortalAccountMenu"
                anchorEl={selectedPortalAccountsMenu}
                open={Boolean(selectedPortalAccountsMenu)}
                onClose={closeSelectedPortalAccountsMenu}
              >
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      dispatch(removePortalAccounts(selectedPortalAccountIds));
                      props.onMenuItemClick();
                      closeSelectedPortalAccountsMenu();
                    }}
                  >
                    <ListItemIcon className="min-w-40">
                      <Icon>delete</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Eliminar" />
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          )}
        </TableCell>
        {rows.map((row) => {
          return (
            <TableCell
              className="p-4 md:p-16"
              key={row.id}
              align={row.align}
              padding={row.disablePadding ? 'none' : 'normal'}
              sortDirection={props.order.id === row.id ? props.order.direction : false}
            >
              {row.sort && (
                <Tooltip
                  title="Sort"
                  placement={row.align === 'right' ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={props.order.id === row.id}
                    direction={props.order.direction}
                    onClick={createSortHandler(row.id)}
                    className="font-semibold"
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              )}
            </TableCell>
          );
        }, this)}
      </TableRow>
    </TableHead>
  );
}

export default PortalAccountsTableHead;
