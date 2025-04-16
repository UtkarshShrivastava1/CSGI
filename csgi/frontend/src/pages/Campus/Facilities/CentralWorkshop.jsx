import React from 'react';

export default function CentralWorkshop() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-white to-gray-50 shadow-xl rounded-lg border border-gray-100">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 relative inline-block">
          Central Workshop
          <span className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-600 rounded-full"></span>
        </h1>
        <p className="text-blue-600 mt-2">National Institute of Technology</p>
      </div>
      
      <div className="mb-12">
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
          <p className="leading-relaxed text-gray-700">
            Central workshop is considered facility of the Institute and it is one among those that serve, 
            support and enhances the academic activities. Central workshop at NIT is constantly engaged 
            in providing facilities to conduct Engineering practicals, which may include in-house 
            fabrication and assembly of various test rigs for different labs, repair, maintenance and 
            modification if required to existing ones. The Central Workshop is situated at 910.92 Sq. Mts. 
            area and it is well equipped with machines and tools. The facilities include 'Fitting Shop', 
            'Welding Shop', 'Black Smithy Shop', Carpentry workshop in following the 7S standard practice for 
            quality and safe environment. Human and equipment safety are the assets of the Central Workshop.
          </p>
        </div>
      </div>
      
      <div className="space-y-8">
        {/* Fitting Shop Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 pb-2 border-b">
            Fitting Shop
          </h2>
          <p className="mb-3 text-gray-600">Details of equipments available:</p>
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
            <div className="text-gray-700">• Hydraulic Power Hacksaw</div>
            <div className="text-gray-700">• Pedestal Grinding Machine</div>
            <div className="text-gray-700">• Bench Drill Machine</div>
            <div className="text-gray-700">• Tap Set</div>
            <div className="text-gray-700">• Die Set</div>
            <div className="text-gray-700">• Flat, Half Round and Hand Files</div>
          </div>
        </div>
        
        {/* Welding Shop Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 pb-2 border-b">
            Welding Shop
          </h2>
          <p className="mb-3 text-gray-600">Details of equipments available:</p>
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
            <div className="text-gray-700">• Welding Machine (Electric Arc)</div>
            <div className="text-gray-700">• MIG Welding Machine</div>
            <div className="text-gray-700">• Spot Welding Machine</div>
            <div className="text-gray-700">• Gas Welding</div>
          </div>
        </div>
        
        {/* Black Smithy Shop Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 pb-2 border-b">
            Black Smithy Shop
          </h2>
          <p className="mb-3 text-gray-600">Details of equipments available:</p>
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
            <div className="text-gray-700">• Anvil</div>
            <div className="text-gray-700">• Forge</div>
            <div className="text-gray-700">• Blower</div>
            <div className="text-gray-700">• Tongs</div>
          </div>
        </div>
        
        {/* Machine Shop Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 pb-2 border-b">
            Machine Shop
          </h2>
          <p className="mb-3 text-gray-600">Details of equipments available:</p>
          <div className="grid grid-cols-1 gap-y-2">
            <div className="text-gray-700">• Lathe machines: 3 types (Gero and Royal Ltd by Machine and Hand Feed Machine)</div>
            <div className="text-gray-700">• Shaper Machine (L &amp; T)</div>
            <div className="text-gray-700">• Capston Turner Machine (Grinding Machine) (17 HP inch TS) and Hand Feed</div>
            <div className="text-gray-700">• Grinding Machine</div>
            <div className="text-gray-700">• Shaper Machine</div>
            <div className="text-gray-700">• Milling Machine</div>
            <div className="text-gray-700">• Power saw Machine</div>
          </div>
        </div>
        
        {/* Foundry Shop Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 pb-2 border-b">
            Foundry Shop
          </h2>
          <p className="mb-3 text-gray-600">Details of equipments available:</p>
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
            <div className="text-gray-700">• Cupola (10")</div>
            <div className="text-gray-700">• Pit Furnace (1)</div>
            <div className="text-gray-700">• Pit Laddle</div>
            <div className="text-gray-700">• Core maker</div>
            <div className="text-gray-700">• Patterns Moulder</div>
          </div>
        </div>
        
        {/* Carpentry Shop Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-blue-700 mb-4 pb-2 border-b">
            Carpentry Shop
          </h2>
          <p className="mb-3 text-gray-600">Numerous wood cutting machines and equipments available:</p>
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-2">
            <div className="text-gray-700">• Band saw machine</div>
            <div className="text-gray-700">• Jig Saw machine</div>
            <div className="text-gray-700">• Planer</div>
            <div className="text-gray-700">• Joining and Circular Hand</div>
            <div className="text-gray-700">• Rip Saw</div>
            <div className="text-gray-700">• Radial Saw</div>
            <div className="text-gray-700">• Plane Files and Different Hand Files</div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 pt-6 border-t border-gray-200 text-center">
        <div className="bg-blue-50 p-4 rounded-lg inline-block">
          <p className="text-gray-600">© 2025 Central Workshop, National Institute of Technology</p>
        </div>
      </div>
    </div>
  );
}