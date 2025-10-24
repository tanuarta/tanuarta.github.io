import pdf from '../Media/Bp_Eddy_Tjahja_Funeral_Booklet.pdf';
import React from 'react';

const DisplayPDF = () => {
    return (
        <iframe
            src={pdf}
            title="Funeral Booklet"
            width="100%"
            height="100vh"
            style={{ border: 'none' }}

        />
    );
};
export default DisplayPDF;