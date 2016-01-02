$(document).ready(function() {
	$("#data_diri").css("display", "block");
	$("#akademik").css("display", "none");
	$("#ortu").css("display", "none");
	$("#kontak").css("display", "none");
	$("#pendidikan-formal").css("display", "none");
	$("#pendidikan-nonformal").css("display", "none");
	$("#riwayat-organisasi").css("display", "none");
	$("#keterangan-prestasi").css("display", "none");

	var form_section = 0;
	$("#lanjut").click(function() {
		form_section++;
		switch (form_section) {
			case 1:
				$("#data_diri").css("display", "none");
				$("#akademik").css("display", "block");
				break;
			case 2:
				$("#akademik").css("display", "none");
				$("#ortu").css("display", "block");
				break;
			case 3:
				$("#ortu").css("display", "none");
				$("#kontak").css("display", "block");
				break;
			case 4:
				$("#kontak").css("display", "none");
				$("#pendidikan-formal").css("display", "block");
				break;
			case 5:
				$("#pendidikan-formal").css("display", "none");
				$("#pendidikan-nonformal").css("display", "block");
				$("#riwayat-organisasi").css("display", "block");
				$("#keterangan-prestasi").css("display", "block");
				break;
		}
	});

	// pendidikan non-formal
	$("#tambah1").click(function() {
		$("#konten1").append('<div class="panel panel-default">' +
								  	'<div class="panel-heading">' +
								    	'<div class="row">' +
								  			'<div class="col-md-10">' +
								  				'<h3 class="panel-title">Nonformal</h3>' +
								  			'</div>' +
								  			'<div class="col-md-2">' +
								  				'<button class="btn btn-danger" onclick="removePanel1()"><i class="glyphicon glyphicon-minus"></i></button>' +
								  			'</div>' +
								  		'</div>' +
								  	'</div>' +
								  	'<div class="panel-body">' +
								    	'<div class="row">' +
								    		'<div class="col-md-4">' +
								    			'<div class="form-group field-pendidikan-nonformal-nama_lembaga">' +
							  						'<label class="control-label" for="pendidikan-nonformal-nama_lembaga">Nama Lembaga</label>' +
							  						'<input class="form-control" id="pendidikan-nonformal-nama_lembaga" type="text" />' +
							  					'</div>' +
								    		'</div>' +
								    		'<div class="col-md-4">' +
								    			'<div class="form-group field-pendidikan-nonformal-tahun_masuk">' +
							  						'<label class="control-label" for="pendidikan-nonformal-tahun_masuk">Tahun Masuk</label>' +
							  						'<input class="form-control" id="pendidikan-nonformal-tahun_masuk" type="text" />' +
							  					'</div>' +
								    		'</div>' +
								    		'<div class="col-md-4">' +
								    			'<div class="form-group field-pendidikan-nonformal-tahun_lulus">' +
							  						'<label class="control-label" for="pendidikan-nonformal-tahun_lulus">Tahun Lulus</label>' +
							  						'<input class="form-control" id="pendidikan-nonformal-tahun_lulus" type="text" />' +
							  					'</div>' +
								    		'</div>' +
								    	'</div>' +
								  	'</div>' +
								'</div>');
	});

	// riwayat organisasi
	$("#tambah2").click(function() {
		$("#konten2").append('<div class="panel panel-default">' +
								  	'<div class="panel-heading">' +
								    	'<div class="row">' +
								  			'<div class="col-md-10">' +
								  				'<h3 class="panel-title">Organisasi</h3>' +
								  			'</div>' +
								  			'<div class="col-md-2">' +
								  				'<button class="btn btn-danger" onclick="removePanel2()"><i class="glyphicon glyphicon-minus"></i></button>' +
								  			'</div>' +
								  		'</div>' +
								  	'</div>' +
								  	'<div class="panel-body">' +
								    	'<div class="row">' +
								    		'<div class="col-md-3">' +
								    			'<div class="form-group field-riwayat-organisasi-nama_organisasi">' +
							  						'<label class="control-label" for="riwayat-organisasi-nama_organisasi">Nama Organisasi</label>' +
							  						'<input class="form-control" id="riwayat-organisasi-nama_organisasi" type="text" />' +
							  					'</div>' +
								    		'</div>' +
								    		'<div class="col-md-3">' +
								    			'<div class="form-group field-riwayat-organisasi-bidang">' +
							  						'<label class="control-label" for="riwayat-organisasi-bidang">Bidang</label>' +
							  						'<input class="form-control" id="riwayat-organisasi-bidang" type="text" />' +
							  					'</div>' +
								    		'</div>' +
								    		'<div class="col-md-3">' +
								    			'<div class="form-group field-riwayat-organisasi-jabatan">' +
							  						'<label class="control-label" for="riwayat-organisasi-jabatan">Jabatan</label>' +
							  						'<input class="form-control" id="riwayat-organisasi-jabatan" type="text" />' +
							  					'</div>' +
								    		'</div>' +
								    		'<div class="col-md-3">' +
								    			'<div class="form-group field-riwayat-organisasi-periode">' +
							  						'<label class="control-label" for="riwayat-organisasi-periode">Periode</label>' +
							  						'<input class="form-control" id="riwayat-organisasi-periode" type="text" />' +
							  					'</div>' +
								    		'</div>' +
								    	'</div>' +
								  	'</div>' +
								'</div>');
	});

	// keterangan prestasi
	$("#tambah3").click(function() {
		$("#konten3").append('<div class="panel panel-default">' +
								  	'<div class="panel-heading">' +
								    	'<div class="row">' +
								  			'<div class="col-md-10">' +
								  				'<h3 class="panel-title">Prestasi</h3>' +
								  			'</div>' +
								  			'<div class="col-md-2">' +
								  				'<button class="btn btn-danger" onclick="removePanel3()"><i class="glyphicon glyphicon-minus"></i></button>' +
								  			'</div>' +
								  		'</div>' +
								  	'</div>' +
								  	'<div class="panel-body">' +
								    	'<div class="row">' +
								    		'<div class="col-md-4">' +
								    			'<div class="form-group field-keterangan-prestasi-nama_penghargaan">' +
							  						'<label class="control-label" for="keterangan-prestasi-nama_penghargaan">Nama Penghargaan</label>' +
							  						'<input class="form-control" id="keterangan-prestasi-nama_penghargaan" type="text" />' +
							  					'</div>' +
								    		'</div>' +
								    		'<div class="col-md-4">' +
								    			'<div class="form-group field-keterangan-prestasi-pemberi_penghargaan">' +
							  						'<label class="control-label" for="keterangan-prestasi-pemberi_penghargaan">Pemberi Penghargaan</label>' +
							  						'<input class="form-control" id="keterangan-prestasi-pemberi_penghargaan" type="text" />' +
							  					'</div>' +
								    		'</div>' +
								    		'<div class="col-md-4">' +
								    			'<div class="form-group field-keterangan-prestasi-tahun">' +
							  						'<label class="control-label" for="keterangan-prestasi-tahun">Tahun</label>' +
							  						'<input class="form-control" id="keterangan-prestasi-tahun" type="text" />' +
							  					'</div>' +
								    		'</div>' +
								    	'</div>' +
								  	'</div>' +
								'</div>');
	});
});