export interface BilibiliURL {
	gt7: string;
	gt7_vr: string;
	gt7_none: string;
}

export interface CarEntity {
	ID: number;
	CreatedAt: string;
	UpdatedAt: string;
	DeletedAt: string;
	name: string;
	brand: string;
	gr_level: string;
	image_url: string;
	detail_url: string;
	weight: string;
	performance: string;
	dimensions: string;
	description: string;
	manufacturer: string;
	category: string;
	engine: string;
	aspiration: string;
	power: string;
	torque: string;
	drivetrain: string;
	length: string;
	width: string;
	height: string;
	bilibiliURL: BilibiliURL;
}
