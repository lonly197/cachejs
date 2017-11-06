import test from 'ava';
import { CacheJS } from '../src/index';

class People {
  constructor(name) {
    this._name = name
  }
  get getName() {
    return this._name
  }
}

let tester = new People('tester')

test('store string', t => {
  CacheJS.addData(tester, 'name', 'lonly')
  t.pass()
})

test('get value by key', async(t) => {
  t.is(CacheJS.getData(tester,'name'), 'lonly')
})

test('store ojbect', t => {
  CacheJS.addData(tester, 'obj', new People('tester'))
  t.pass()
})

test('get obj by key', async(t) => {
  t.is(CacheJS.getData(tester,'obj').getName, 'tester')
})