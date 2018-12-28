import React from 'react';
import { Colors } from '../../theme';
import { Close } from '../../assets';

interface BottomSheetProps {
  show?: boolean;
  onClose?: () => void;
}

export class BottomSheet extends React.Component<BottomSheetProps> {
  render() {
    const top = this.props.show ? 62 : '100vh';
    return (
      <div style={{ 
        zIndex: 99, 
        height: 'calc(100vh - 62px)',
        top: top,
        backgroundColor: '#121212', 
        width: '100%', 
        flex: 1, 
        display: 'flex',
        position: 'fixed',
        flexDirection: 'column',
        borderTop: '1px solid',
        borderTopColor: Colors.GrayLighter,
        transition: 'top 0.3s'
        }}>
        <img 
        src={Close} 
        onClick={this.props.onClose} 
        style={{ 
          padding: 20, 
          cursor: 'pointer', 
          height: 48, 
          marginRight: 'auto',
          filter: 'invert(1)'
          }}/>
        <div
        style={{
          flexGrow: 1,
          flex: 1,
          margin: 40, 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          filter: 'invert(1)'
          }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}