export const WaveBorder = ({ className, rotate }) => (
    <div className={rotate ? 'rotate-180 pointer-events-none' : 'pointer-events-none'}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" 
            className={"absolute "+className}
            style={{ transform: 'scaleY(0.7)', zIndex: 2 }} 
        > 
            <path fill="#d0d0ce" fillOpacity="1" d="M0,224L34.3,218.7C68.6,213,137,203,206,208C274.3,213,343,235,411,245.3C480,256,549,256,617,240C685.7,224,754,192,823,170.7C891.4,149,960,139,1029,160C1097.1,181,1166,235,1234,224C1302.9,213,1371,139,1406,101.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
    </div>
);