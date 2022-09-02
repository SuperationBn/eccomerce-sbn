import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDataGlobal } from './context/TagApiProvider';
import Image from 'next/image';
import { BsX } from "react-icons/bs";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: '#000000',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const { open, handleClose, zoonImg } = useDataGlobal()


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Image layout='responsive' width={120} height={120} className="myfilter w-[100%] object-cover" src={zoonImg} alt="" />
          <BsX
            onClick={handleClose}
            className="absolute top-2 right-2 text-slate-50 cursor-pointer text-2xl" />
        </Box>
      </Modal>
    </div>
  );
}
