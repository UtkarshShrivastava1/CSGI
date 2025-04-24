import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Csit from '../assets/csitlogo.png';
import Csip from '../assets/csip.png';

export default function InstitutesSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Institutes</h2>
      
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* Technology Institute Card */}
        <Link to="https://csitdurg.in"  target="_blank" rel="noopener noreferrer" className="flex-1"> {/* Wrap the card in a Link */}
          <div className="bg-blue-800 rounded-lg overflow-hidden shadow-lg">
            <div className="p-6 flex flex-col items-center text-center">
              {/* CSIT logo */}
              <img 
                src={Csit}
                alt="Chhatrapati Shivaji Institute of Technology Logo" 
                className="w-40 h-40 object-contain"
              />
              <h3 className="text-xl font-bold text-white mb-2">CHHATRAPATI SHIVAJI INSTITUTE OF TECHNOLOGY</h3>
              <p className="text-white text-sm">Leading technical education institute in Chhattisgarh, offering top-notch courses in various engineering streams.</p>
            </div>
          </div>
        </Link>

        {/* Pharmacy Institute Card */}
        <Link to="https://csipdurg.in/" target="_blank" rel="noopener noreferrer" className="flex-1"> {/* Wrap the card in a Link */}
          <div className="bg-green-600 rounded-lg overflow-hidden shadow-lg">
            <div className="p-6 flex flex-col items-center text-center">
              {/* CSPI logo */}
              <img 
                src={Csip}
                alt="Chhatrapati Shivaji Institute of Pharmacy Logo" 
                className="w-40 h-40 object-contain"
              />
              <h3 className="text-xl font-bold text-white mb-2">CHHATRAPATI SHIVAJI INSTITUTE OF PHARMACY</h3>
              <p className="text-white text-sm">Premier pharmacy institute in Chhattisgarh, specializing in pharmacy education and research.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}