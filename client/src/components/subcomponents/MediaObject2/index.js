import React from 'react';

const MediaObject2 = props => {
	return (
		<div>
			<div className='container rounded mb-4'>
				<div className='row d-flex'>
					<div className='col-md-6 py-3 d-flex justify-content-center align-items-center rounded'>
						<div className='container'>
							<div className='row'>
								<div className='col-12 text-center text-md-left'>
									<h2> Herbal Therapy v. Synthetic Treatment</h2>
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
									Herbal therapy is a holistic therapy, integrating emotional, mental and spiritual levels. Plants represent a vast reservoir of biologically interesting chemicals – an evolutionary science lab.  The use of herbs does not generally involve "drug" actions or adverse effects. Recent studies suggest that herbal therapies are safer and cheaper than synthetic drug treatments.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-6 rounded'>
						<div
							className='container round_corner'
							style={{
								height: 300,
								backgroundImage:
									"url('https://c3k4b8c2.stackpathcdn.com/wp-content/uploads/2016/07/5-Facts-About-Drug-Abuse-You-Should-Know-1-2.jpg')",
								backgroundSize: 'cover',
								backgroundPosition: 'center'
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MediaObject2;
