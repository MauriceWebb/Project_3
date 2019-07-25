import React from 'react';

const MediaObject1 = props => {
	return (
		<div>
			<div className='container rounded'>
				<div className='row d-flex'>
					<div className='col-md-6 rounded'>
						<div
							className='container round_corner'
							style={{
								height: 300,
								backgroundImage:
									"url('http://brackenburyclinic.com/wp-content/uploads/2015/12/Herbal-Medicine.jpg')",
								backgroundSize: 'cover',
								backgroundPosition: 'center'
							}}
						/>
					</div>
					<div className='col-md-6 py-3 d-flex justify-content-center align-items-center rounded'>
						<div className='container'>
							<div className='row'>
								<div className='col-12 text-center text-md-left'>
									<h2>Holistic Medicine </h2>
								</div>
								<div className='col-12'>
									<div className='container pl-0'>
										<hr className='w-100 bg-success rounded py-1 ui_gradient2 border-0 mt-n1' />
									</div>
								</div>
							</div>
							<div className='row'>
								<div className='col-12'>
									<p>
										Holistic medicine is a form of healing that considers the
										whole person–body, mind, spirit, and emotions–in the quest
										for optimal health and wellness. According to the holistic
										medicine philosophy, one can achieve optimal health–the
										primary goal of holistic medicine practice–by gaining proper
										balance in life.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MediaObject1;
