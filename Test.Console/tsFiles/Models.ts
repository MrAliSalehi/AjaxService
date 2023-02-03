﻿//This File is autogenerated, DO NOT touch this file!
export type OneOf<Error, Success> = Left<Error> | Right<Success>;
export class Left<T> {
    readonly Error: T;

    private constructor(error: T) {
        this.Error = error;
    }

    IsLeft(): this is Left<T> {
        return true;
    }

    IsRight(): this is Right<never> {
        return false;
    }

    static Create = <E>(error: E) => new Left(error);
}

export class Right<T> {
    readonly Value: T;

    private constructor(value: T) {
        this.Value = value;
    }

    IsLeft(): this is Left<never> {
        return false;
    }

    IsRight(): this is Right<T> {
        return true;
    }

    static Create = <S>(value: S) => new Right(value);
}
export class AnotherDto {
    public readonly Oskefokesokf: boolean = false;
    public readonly Soekfeof: number = 0;

    constructor(Oskefokesokf: boolean = false, Soekfeof: number = 0) {
        this.Oskefokesokf = Oskefokesokf;
        this.Soekfeof = Soekfeof;
    }
}//-EndClass
export class FirstDto {
    public readonly FirstDtos: AnotherDto[] = [];
    public readonly AnotherDtossssss: AnotherDto = new AnotherDto();
    public readonly ReadOnlyCollection: AnotherDto[] = [];
    public readonly Name: string = "";
    public readonly Age: number = 0;
    public readonly Height: number = 0;
    public readonly IsDumb: boolean = false;

    constructor(FirstDtos: AnotherDto[] = [], AnotherDtossssss: AnotherDto = new AnotherDto(), ReadOnlyCollection: AnotherDto[] = [], Name: string = "", Age: number = 0, Height: number = 0, IsDumb: boolean = false) {
        this.FirstDtos = FirstDtos;
        this.AnotherDtossssss = AnotherDtossssss;
        this.ReadOnlyCollection = ReadOnlyCollection;
        this.Name = Name;
        this.Age = Age;
        this.Height = Height;
        this.IsDumb = IsDumb;
    }
}//-EndClass