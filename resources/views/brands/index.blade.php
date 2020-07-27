@extends('adminlte::page')

@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="float-left">
                <h2>List of brands</h2>
            </div>
        </div>
    </div>

    @if($message = Session::get('success'))
        <div class="alert alert-success">
            <p class="mb-0">{{ $message }}</p>
        </div>
    @endif

    <div class="card">
        <div class="card-header">
            <div class="card-tools">
                <a class="btn btn-outline-success" href="{{ route('brands.create') }}"> Create New Brand</a>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-bordered table-striped">
                <colgroup>
                    <col width="50">
                    <col width="200">
                    <col width="100">
                    <col width="auto">
                    <col width="100">
                    <col width="100">
                </colgroup>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Details</th>
                    <th>Quality</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <?php $i = 0; ?>
                @foreach ($brands as $brand)
                    <tr>
                        <td>{{ ++$i }}</td>
                        <td><a href="{{ route('brands.show',$brand->id) }}">{{ $brand->name }}</a></td>
                        <td>{{ $brand->price }}</td>
                        <td>{{ $brand->detail }}</td>
                        <td>{{ $brand->quality }}</td>
                        <td>
                            <form action="{{ route('brands.destroy',$brand->id) }}" method="POST">
                                <div class="btn-group-sm">
                                    <a class="btn btn-outline-secondary" href="{{ route('brands.edit',$brand->id) }}"><i class="fa fa-edit"></i></a>
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-outline-danger"><i class="fa fa-trash-alt"></i></button>
                                </div>
                            </form>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>

@endsection
