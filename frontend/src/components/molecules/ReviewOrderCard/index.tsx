import {
  Box,
  Grid,
  Typography,
  styled,
  Card,
  CardContent,
} from '@mui/material';
import React from 'react';
import theme from '../../../utils/theme';
import {
  discount,
  getCurrencyCode,
  grandTotal,
  itemTotal,
  Svg,
} from '../../../utils/constants';
import { Icons } from '../../atoms/Icons';

interface ReviewOrderProps {
  iconImg: Svg;
  labName: string;
  totalItem: number;
  discount: number;
  grandTotal: number;
  className?: string;
  currency: 'Rupee' | 'Dollar';
}

const StyledBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.grey[100]}`,
  borderRadius: theme.spacing(2),
});

const StyledCardContent = styled(CardContent)({
  padding: theme.spacing(3),
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledIconBox = styled(Box)({
  border: `1px solid ${theme.palette.grey[100]}`,
  borderRadius: '50%',
  width: theme.spacing(10),
  height: theme.spacing(10),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: theme.spacing(2.5),
});

const ReviewOrderCard = (props: ReviewOrderProps) => {
  return (
    <Grid container spacing={3} className={props.className}>
      <Grid item md={12} xs={12} sm={12}>
        <StyledBox>
          <StyledIconBox>
            <Icons
              icon={props.iconImg}
              width={theme.spacing(11)}
              height={theme.spacing(8)}
            />
          </StyledIconBox>
          <Typography
            data-testid="labnameid"
            variant="body1"
            color={'text.primary'}
          >
            {props.labName}
          </Typography>
        </StyledBox>
      </Grid>
      <Grid item md={12} xs={12} sm={12}>
        <Card>
          <StyledCardContent>
            <Typography
              data-testid="totalitemid"
              variant="caption"
              color="text.secondary"
            >
              {itemTotal}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {getCurrencyCode(props.currency)}
              {props.totalItem}
            </Typography>
          </StyledCardContent>
          <StyledCardContent>
            <Typography
              data-testid="discountid"
              variant="caption"
              color="text.secondary"
            >
              {discount}
            </Typography>
            <Typography variant="caption" color="success.main">
              -{getCurrencyCode(props.currency)}
              {props.discount}
            </Typography>
          </StyledCardContent>
          <StyledCardContent>
            <Typography data-testid="grandtotalid" variant="caption">
              {grandTotal}
            </Typography>
            <Typography variant="caption" sx={{ fontWeight: 700 }}>
              {getCurrencyCode(props.currency)}
              {props.grandTotal}
            </Typography>
          </StyledCardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ReviewOrderCard;
