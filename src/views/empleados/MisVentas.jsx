import React from 'react'
import { ResponsiveBar } from '@nivo/bar';
import Nav from '../Nav';

export default function MisVentas() {
  const data = [
    { country: 'ENERO', sales: 30 },
    { country: 'FEBRERO', sales: 20 },
    { country: 'MARZO', sales: 40 },
    { country: 'ABRIL', sales: 10 },
    { country: 'MAYO', sales: 30 },
    { country: 'JUNIO', sales: 20 },
    { country: 'JULIO', sales: 60 },
    { country: 'AGOSTO', sales: 80 },
    { country: 'SEPTIEMBRE', sales: 10 },
    { country: 'OCTUBRE', sales: 70 },
    { country: 'NOVIEMBRE', sales: 60 },
    { country: 'DICIEMBRE', sales: 50 },
  ];
  
  return (
    <div>
      <Nav/>
        <div className="container mt-3 ms-n3">
              <div className="row">
                <div className="">
                <h2>
                 <i class="bi bi-graph-up-arrow"></i> MIS VENTAS
                </h2>
      
                <div className="container mt-5">
                  <div className="row">
                    <div className="col-4">
                      <div className="card bg-primary-subtle text-primary-emphasis">
                        <div className="card-body text-center">
                          <p className='h1'>Total:</p>
                          <p className='h2'>$120</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-4">
                      <div className="card bg-success-subtle text-success-emphasis">
                        <div className="card-body text-center">
                          <p className='h1'>Inventario</p>
                          <p className='h2'>1200 productos</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ResponsiveBar
                  data={data}
                  keys={['sales']}
                  indexBy="country"
                  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                  padding={0.3}
                  colors={{ scheme: 'nivo' }}
                  axisBottom={{
                    tickRotation: -45,
                  }}
                  axisLeft={{
                    tickPadding: 5,
                  }}
                  height={500}
                  width={1300} 
                />
                </div>
                
              </div>
            </div>
    </div>
  )
}
