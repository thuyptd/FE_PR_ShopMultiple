@extends('adminlte::page')

@section('content')
    <div class="table-responsive">
        <table class="table table-striped">
            {{ $auth }}
            {{$user}}
        </table>
    </div>
@endsection
