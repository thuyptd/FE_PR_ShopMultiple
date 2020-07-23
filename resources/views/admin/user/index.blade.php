@extends('adminlte::page')

@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="float-left">
                <h2>List of users</h2>
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
                <a class="btn btn-outline-success" href="{{ route('users.create') }}"> Create New User</a>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-striped">
                    <colgroup>
                        <col width="50">
                        <col width="120">
                        <col width="auto">
                        <col width="auto">
                        <col width="200">
                        <col width="100">
                    </colgroup>
                    <tr>
                        <th>ID</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                    @foreach ($users as $user)
                        <tr>
                            <td>{{ $user->id }}</td>
                            <td>{{ $user->code }}</td>
                            <td><a href="{{ route('users.show', $user->id) }}">{{ $user->name }}</a></td>
                            <td>{{ $user->email }}</td>
                            <td>{{ $user->phone }}</td>
                            <td>
                                <form action="{{ route('users.destroy', $user->id) }}" method="POST">
                                    <div class="btn-group-sm">
                                        <a href="{{ route('users.edit', $user->id) }}" class="btn btn-outline-secondary"><i class="fas fa-edit"></i></a>
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
                                    </div>
                                </form>
                            </td>
                        </tr>
                    @endforeach

                </table>
            </div>
        </div>
    </div>
    {!! $users->links() !!}
@endsection
