@extends('adminlte::page')

@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="float-left">
                <h2>Add New Product</h2>
            </div>
            <div class="float-right">
                <a class="btn btn-outline-secondary" href="{{ route('products.index') }}"> Back</a>
            </div>
        </div>
    </div>

    @if ($errors->any())
        <div class="alert alert-danger">
            <strong>Whoops!</strong> There were some problems with your input.<br><br>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <div class="card">
        <div class="card-body">
            <form action="{{ route('products.store') }}" method="POST">
                @csrf
                <div class="row">
                    <div class="col-xs-12 col-sm-6">
                        <div class="form-group">
                            <strong>Name:</strong>
                            <input type="text" name="name" class="form-control" placeholder="Name">
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-3">
                        <div class="form-group">
                            <strong>Price:</strong>
                            <input type="number" name="price" class="form-control" placeholder="Price">
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-3">
                        <div class="form-group">
                            <strong>Quality:</strong>
                            <input type="number" name="quality" min="0" class="form-control" placeholder="Quality" value="0">
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="form-group">
                            <strong>Detail:</strong>
                            <textarea class="form-control" rows="5" name="detail" placeholder="Detail"></textarea>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>

            </form>
        </div>
    </div>
@endsection
