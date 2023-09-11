import { style } from '@vanilla-extract/css';

export const card = style({
  width: '288px',
  height: 'auto',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '8px',
});

export const imageFrame = style({
  width: '100%',
  height: 'auto',
  marginBottom: '12px',
});

export const body = style({
  width: '100%',
  height: 'auto',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
});

export const title = style({
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '4px',
});

export const detail = style({
  fontSize: '14px',
  lineHeight: '1.5',
});
