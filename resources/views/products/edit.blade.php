@extends('adminlte::page')

@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="float-left">
                <h2>Edit Product</h2>
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
            <form action="{{ route('products.update',$product->id) }}" method="POST">
                @csrf
                @method('PUT')

                <div class="row">
                    <div class="col-xs-12 col-sm-6">
                        <div class="form-group">
                            <strong>Name:</strong>
                            <input type="text" name="name" value="{{ $product->name }}" class="form-control" placeholder="Name">
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-3">
                        <div class="form-group">
                            <strong>Price:</strong>
                            <input type="number" name="price" class="form-control" placeholder="Price" value="{{ $product->price }}">
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-3">
                        <div class="form-group">
                            <strong>Quality:</strong>
                            <input type="number" name="quality" min="0" class="form-control" placeholder="Quality" value="{{ $product->quality }}">
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <div class="form-group">
                            <strong>Detail:</strong>
                            <textarea class="form-control" rows="5" name="detail" placeholder="Detail">{{ $product->detail }}</textarea>
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
