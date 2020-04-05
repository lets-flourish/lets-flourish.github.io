import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
  item: {
    margin: `${theme.spacing(8)}px auto`
  },
  // tag
  placeTag: {
    display: 'inline-block',
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    margin: theme.spacing(2),
    marginLeft: 0,
    backgroundColor: '#f5e5e1',
  },
  // list
  servicesListItem: {
    padding: 0,
  },
  servicesListItemIcon: {
    minWidth: theme.spacing(8)
  }
}));

export default useStyles;
