import { useState ,useEffect} from 'react';

const BoxBreathing = () => {
    const [ step, setStep ] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const steps = ["Inhale", "Hold", "Exhale", "Hold"];
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6x1 font-bold">{steps[step]}</h1>
        <p className="mt-4 text-gray-500">Breathe and Follow The Instructions</p>
        </div>
    );
};

export default BoxBreathing;