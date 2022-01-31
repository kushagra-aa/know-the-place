import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../style-constants';

export default makeStyles(() => ({
    card: {
        color: colors.primary3,
        backgroundColor: colors.primary1,
    },
    name: {
        color: colors.primary3,
    },
    ranking: {
        color: colors.secondary,
    },
    price: {
        color: colors.secondary,
    },
    chip: {
        margin: '5px 5px 5px 0',
        backgroundColor: colors.secondary,
        color: colors.primary1
    },
    subtitle: {
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
        color: colors.accent
    },
    spacing: {
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        color: colors.accent
    },
}));