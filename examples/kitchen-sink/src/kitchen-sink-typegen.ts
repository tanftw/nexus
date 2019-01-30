/**
 * This file was automatically generated by Nexus 0.9.0
 * Do not make changes to this file directly
 */


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  InputType: { // input type
    answer?: number | null; // Int
    key: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  Bar: NexusGenRootTypes['Foo'] | NexusGenRootTypes['TestObj'];
  Baz: NexusGenRootTypes['TestObj'];
  Boolean: boolean;
  Float: number;
  Foo: { // root type
    argsTest: boolean; // Boolean!
    name: string; // String!
    ok: boolean; // Boolean!
  }
  ID: string;
  Int: number;
  Query: {};
  String: string;
  TestObj: { // root type
    a: NexusGenRootTypes['Bar']; // Bar!
    argsTest: boolean; // Boolean!
    item: string; // String!
    ok: boolean; // Boolean!
  }
  TestUnion: NexusGenRootTypes['Foo'];
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  InputType: NexusGenInputs['InputType'];
}

export interface NexusGenFieldTypes {
  Bar: { // field return type
    argsTest: boolean; // Boolean!
    ok: boolean; // Boolean!
  }
  Baz: { // field return type
    a: NexusGenRootTypes['Bar']; // Bar!
    ok: boolean; // Boolean!
  }
  Foo: { // field return type
    argsTest: boolean; // Boolean!
    name: string; // String!
    ok: boolean; // Boolean!
  }
  Query: { // field return type
    bar: NexusGenRootTypes['Bar']; // Bar!
  }
  TestObj: { // field return type
    a: NexusGenRootTypes['Bar']; // Bar!
    argsTest: boolean; // Boolean!
    item: string; // String!
    ok: boolean; // Boolean!
  }
}

export interface NexusGenArgTypes {
  Bar: {
    argsTest: { // args
      a?: NexusGenInputs['InputType'] | null; // InputType
    }
  }
  Foo: {
    argsTest: { // args
      a?: NexusGenInputs['InputType'] | null; // InputType
    }
  }
  TestObj: {
    argsTest: { // args
      a?: NexusGenInputs['InputType'] | null; // InputType
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
  Bar: "Foo" | "TestObj"
  Baz: "TestObj"
  TestUnion: "Foo"
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Foo" | "Query" | "TestObj";

export type NexusGenInputNames = "InputType";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = "Bar" | "Baz";

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = "TestUnion";

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['enumNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}

export type Gen = NexusGenTypes;