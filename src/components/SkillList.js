import React from 'react';

import Typography from '@material-ui/core/Typography';
import '../styles/skillList.css'



export default function InteractiveList() {
  const languages = ["JavaScript","React.js","C++","Python","SQL","HTML","CSS","Redux","Git","SCSS"]
  return (
    <div >
      <Typography variant="h5" >
            Skills 
          </Typography>
            <div className="f-box">
                {
                  languages.map(lan => {
                      return (
                          <div className="flex-container">
                            {lan}
                          </div>
                      )
                  })
                }
            </div>

    </div>
  );
}