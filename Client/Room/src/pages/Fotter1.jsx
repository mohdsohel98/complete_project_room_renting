import React from 'react'

function Footer1() {
  return (
    <div className="py-16 text-white" style={{backgroundColor: 'rgb(14 159 110 )'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-3">Ready to Find Your Perfect Match?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-primary-100">
            Whether you're looking for a new place to call home or wanting to rent out your space,
            we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/listings" 
              className="bg-white  px-6 py-3 rounded-md font-medium hover:bg-neutral-100 transition-colors" style={{"color": "rgb(14 159 110"}}
            >
              Find a Room
            </a>
            <a 
              href="/post-listing" 
              className="px-6 py-3 text-white rounded-md font-medium hover:bg-primary-800 transition-colors" style={{"backgroundColor": "rgb(4 120 87)"}}
            >
              Post a Room
            </a>
          </div>
        </div>
       </div>

    
  
  )
}

export default Footer1