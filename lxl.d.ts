declare enum DimensionID {
    Unknown = -1,
    Overworld,
    Nether,
    End
}

declare enum DirectionID {
    North,
    East,
    South,
    West
}
declare enum GameModeID {
    Survival,
    Creative,
    Adventure,
    Spectator
}
declare enum MessageID {
    Raw,
    Chat,
    Popup,
    Tip,
    Json
}
declare type PermissionID = 0 | 1 | 2 | 3 | 4
declare type Integer = number
declare type Float = number
export enum Format {
    Black = "§0",
    DarkBlue = "§1",
    DarkGreen = "§2",
    DarkAqua = "§3",
    DarkRed = "§4",
    DarkPurple = "§5",
    Gold = "§6",
    Gray = "§7",
    DarkGray = "§8",
    Blue = "§9",
    Green = "§a",
    Aqua = "§b",
    Red = "§c",
    LightPurple = "§d",
    Yellow = "§e",
    White = "§f",
    MinecoinGold = "§g",
    Bold = "§l",
    Italics = "§o",
    Underline = "§n",
    StrikeThrough = "§m",
    Random = "§k",
    Clear = "§r"
}
export enum LogLevel {
    Slient,
    Fatal,
    Error,
    Warn,
    Info,
    Debug
}
export interface IntPos {
    x: Integer,
    y: Integer,
    z: Integer,
    dim: string,
    dimid: DimensionID
}
export interface FloatPos {
    x: Float,
    y: Float,
    z: Float,
    dim: string,
    dimid: DimensionID
}
export interface Player {
    readonly name: string,
    readonly pos: FloatPos,
    readonly blockPos: IntPos,
    readonly realName: string,
    readonly xuid: string,
    readonly uuid: string,
    readonly permLevel: PermissionID,
    readonly gameMode: GameModeID,
    readonly maxHealth: Integer,
    readonly health: Integer,
    readonly inAir: boolean,
    readonly inWater: Boolean,
    readonly sneaking: boolean,
    readonly speed: Float,
    readonly direction: DirectionID

    isOp(): boolean
    kick(msg?: string): boolean
    disconnect(msg?: string): boolean
    tell(msg: string, type?: MessageID): boolean
    sendText(msg: string, type?: MessageID): boolean
    runcmd(cmd: string): boolean
    teleport(pos: IntPos | FloatPos): boolean
    teleport(x: number, y: number, z: number, dimid: DimensionID): boolean
    kill(): boolean
    hurt(damage: Integer): boolean
    setOnFire(time: Integer): boolean
    rename(newname: string): boolean
    getDevice(): Device
    getHand(): Item
    getOffHand(): Item
    getInventory(): Container
    getArmor(): Container
    getEnderChest(): Container
    giveItem(item: Item): boolean
    clearItem(type: string): Integer
    refreshItems(): boolean
    refreshChunks(): boolean
    setPermLevel(level: PermissionID): boolean
    setGameMode(mode: GameModeID): boolean
    addLevel(count: Integer): boolean
    transServer(server: string, port: Integer): boolean
    crash(): boolean
    setSidebar(title: string, data: any, sortOrder: number): boolean
    removeSidebar(): boolean
    setBossBar(title: string, percent: Integer): boolean
    removeBossBar(): boolean
    getNbt(): NbtCompound
    setNbt(nbt: NbtCompound): boolean
    addTag(tag: string): boolean
    removeTag(tag: string): boolean
    hasTag(tag: string): boolean
    getAllTags(): string[]
    getAbilities(): any
    getAttributes(): any[]

    getScore(name: string): Integer
    setScore(name: string, value: Integer): boolean
    addScore(name: string, value: Integer): boolean
    reduceScore(name: string, value: Integer): boolean
    deleteScore(name: string): boolean

    sendModalForm(title: string, content: string, button1: string, callback: (player: Player, result: 0 | 1 | undefined) => void): Integer | undefined
    sendSimpleForm(title: string, content: string, buttons: string[], images: string[], callback: (player: Player, id: Integer | undefined) => void): Integer | undefined
    sendCustomForm(json: string, callback: (player: Player, data: [undefined, ...any[]]) => void): Integer | undefined

    sendForm(fm: SimpleForm, callback: (player: Player, id: Integer | undefined) => void): Integer | null
    sendForm(fm: CustomForm, callback: (player: Player, data: any[] | undefined) => void): Integer | null

    setExtraData(name: string, data: any): boolean
    getExtraData(name: string): any
    delExtraData(name: string): any
}
export interface Block {
    readonly name: string
    readonly type: string
    readonly id: Integer
    readonly pos: IntPos

    getNbt(): NbtCompound
    setNbt(nbt: NbtCompound): boolean
    getBlockState(): any
    hasContainer(): boolean
    getContainer(): Container
    hasBlockEntity(): boolean
    getBlockEntity(): BlockEntity | undefined
    removeBlockEntity(): boolean
}
export interface Device {
    readonly ip: string
    readonly avgPing: Integer
    readonly avgPacketLoss: Float
    readonly os: "Android" | "iOS" | "OSX" | "Amazon" | "GearVR" | "Hololens" | "Windows10" | "Win32" | "TVOS" | "PlayStation" | "Nintendo" | "Xbox" | "WindowsPhone" | "Unknown"
    readonly clientId: string
}
export interface Entity {
    readonly name: string
    readonly type: string
    readonly id: Integer
    readonly pos: FloatPos
    readonly blockPos: IntPos
    readonly maxHealth: Integer
    readonly health: Integer
    readonly inAir: boolean
    readonly inWater: boolean
    readonly speed: Float

    teleport(pos: IntPos | FloatPos): boolean
    teleport(x: Integer, y: Integer, z: Integer, dimid: DimensionID): boolean
    kill(): boolean
    hurt(damage: Integer): boolean
    setOnFire(time: Integer): boolean
    isPlayer(): boolean
    toPlayer(): Player | undefined
    getArmor(): Container
    hasContainer(): boolean
    getContainer(): Container
    refreshItems(): boolean
    addTag(tag: string): boolean
    removeTag(tag: string): boolean
    hasTag(tag: string): boolean
    getAllTags(): string[]
    getNbt(): NbtCompound
    setNbt(nbt: NbtCompound): boolean
}
export interface Item {
    readonly name: string
    readonly type: string
    readonly id: Integer
    readonly count: Integer
    readonly aux: Integer

    clone(): Item | undefined
    setNull(): boolean
    set(item: Item): boolean
    setAux(item: Item, aux: Integer): boolean
    getNbt(): NbtCompound
    setNbt(nbt: NbtCompound): boolean
    setLore(names: string[]): boolean
}
export interface BlockEntity {
    readonly pos: IntPos
    readonly type: Integer

    getNbt(): NbtCompound
    setNbt(nbt: NbtCompound): boolean
    getBlock(): Block
}
export interface Container {
    readonly size: Integer
    readonly type: string

    addItem(item: Item): boolean
    addItemToFirstEmptySlot(item: Item): boolean
    hasRoomFor(item: Item): boolean
    getItem(index: Integer): Item
    setItem(index: Integer, item: Item): boolean
    getAllItems(): Item[]
    removeAllItems(): boolean
    isEmpty(): boolean
}
export interface Objective {
    readonly name: string
    readonly displayName: string

    getScore(target: Player | string): Integer
    setScore(target: Player | string, score: Integer): Integer | undefined
    addScore(target: Player | string, score: Integer): Integer | undefined
    reduceScore(target: Player | string, score: Integer): Integer | undefined
    deleteScore(target: Player | string): boolean
    setDisplay(slot: "sidebar" | "belowname" | "list", sortOrder?: 0 | 1): boolean
}
export interface nbt {
    getType(): any
    toString(space?: Integer): string
    toSNBT(): string
    toBinaryNBT(): ArrayBuffer
    destroy(): boolean
}
export interface NbtCompound extends nbt {
    getKeys(): string[]
    getTypeOf(key: string): any
    setTag(key: string, tag: NbtCompound | NbtValue | NbtList): boolean
    getTag(key: string): NbtCompound | NbtValue | NbtList
    removeTag(key: string): NbtCompound
    setEnd(key: string): NbtList
    setByte(key: string, data: any): NbtList
    setShort(key: string, data: any): NbtList
    setInt(key: string, data: any): NbtList
    setLong(key: string, data: any): NbtList
    setFloat(key: string, data: any): NbtList
    setDouble(key: string, data: any): NbtList
    setString(key: string, data: any): NbtList
    getData(key: string): NbtList | NbtCompound | undefined
    toObject(): any
}
export interface NbtValue extends nbt {
    set(data: any): boolean
    get(): any
}
export interface NbtList extends nbt {
    getSize(): Integer
    getTypeOf(index: Integer): any
    setTag(index: Integer, tag: NbtCompound | NbtValue | NbtList): boolean
    getTag(index: Integer): NbtCompound | NbtValue | NbtList
    addTag(tag: NbtCompound | NbtValue | NbtList): NbtList
    removeTag(index: Integer): NbtList
    setEnd(index: Integer): NbtList
    setByte(index: Integer, data: any): NbtList
    setShort(index: Integer, data: any): NbtList
    setInt(index: Integer, data: any): NbtList
    setLong(index: Integer, data: any): NbtList
    setFloat(index: Integer, data: any): NbtList
    setDouble(index: Integer, data: any): NbtList
    setString(index: Integer, data: any): NbtList
    getData(index: Integer): NbtList | NbtCompound | undefined
    toArray(): any[]
}
export interface SimpleForm {
    setTitle(title: string): SimpleForm
    setContent(content: string): SimpleForm
    addButton(text: string, image?: string): SimpleForm
}
export interface CustomForm {
    setTitle(title: string): CustomForm
    addLabel(text: string): CustomForm
    addInput(title: string, placeholder?: string, _default?: string): CustomForm
    addSwitch(title: string, _default?: boolean): CustomForm
    addDropdown(title: string, items: string[], _default?: Integer): CustomForm
    addSlider(title: string, min: Integer, max: Integer, step?: Integer, _default?: Integer): CustomForm
    addStepSlider(title: string, items: string[], _default: Integer): CustomForm
}
export interface Conf {
    reload(): boolean
    close(): boolean
    getPath(): string
    read(): string
    write(content: string): boolean
}
export interface JSONConf extends Conf {
    init(name: string, _default: any): any
    set(name: string, data: any): boolean
    get(name: string, _default?: any): any
    delete(name: string): boolean
}
export interface INIConf extends Conf {
    init(section: string, name: string, _default: Integer | Float | string | boolean): any
    set(section: string, name: string, data: Integer | Float | string | boolean): boolean
    getStr(section: string, name: string, _default?: string): string
    getInt(section: string, name: string, _default?: Integer): Integer
    getFloat(section: string, name: string, _default?: Float): Float
    getBool(section: string, name: string, _default?: boolean): boolean
    delete(section: string, name: string): boolean
}
export interface DB {
    set(name: string, data: any): boolean
    get(name: string): any
    delete(name: string): boolean
    listKey(): string[]
    close(): boolean
}
export interface File {
    readonly path: string
    readonly absolutePath: string
    readonly size: Integer

    readSync(cnt: number): string | ArrayBuffer
    readLineSync(): string | undefined
    readAllSync(): string | ArrayBuffer | undefined
    writeSync(str: string | ArrayBuffer): boolean
    writeLineSync(str: string): boolean

    read(cnt: number, callback: (result: string | ArrayBuffer | undefined) => void): boolean
    readLine(callback: (result: string | undefined) => void): boolean
    readAll(callback: (result: string | ArrayBuffer | undefined) => void): boolean
    write(str: string | ArrayBuffer, callback: (result: string | ArrayBuffer | undefined) => void): boolean
    writeLine(str: string, callback: (result: string | undefined) => void): boolean

    seekTo(pos: number, isRelative: boolean): boolean
    setSize(size: number): boolean
    close(): boolean
    flush(): boolean
    errorCode(): Integer
    clear(): boolean

    createDir(dir: string): boolean
    mkdir(dir: string): boolean
    delete(path: string): boolean
    exists(path: string): boolean
    copy(from: string, to: string): boolean
    move(from: string, to: string): boolean
    rename(from: string, to: string): boolean
    getFileSize(path: string): Integer
    checkIsDir(path: string): boolean
    getFilesList(dir: string): string[]
}
export interface WSClient {
    readonly status: any

    connect(target: string): boolean
    send(msg: string | ArrayBuffer): boolean
    listen(event: "onTextReceived", callback: (msg: string) => void): boolean
    listen(event: "onBinaryReceived", callback: (data: ArrayBuffer) => void): boolean
    listen(event: "onError", callback: (msg: string) => void): boolean
    listen(event: "onLostConnection", callback: (code: Integer) => void): boolean
    close(): boolean
    shutdown(): boolean
    errorCode(): Integer
}
export function log(...args: any[]): void
export function colorLog(color: string, ...args: any[]): void
export function setTimeout(func: () => void, msec: Integer): Integer | undefined
export function setTimeout(code: string, msec: Integer): Integer | undefined
export function setInterval(code: string, msec: Integer): Integer | undefined
export function clearInterval(taskid: Integer): boolean | undefined

export namespace mc {
    function newIntPos(x: Integer, y: Integer, z: Integer, dimid: DimensionID): IntPos
    function newFloatPos(x: Float, y: Float, z: Float, dimid: DimensionID): FloatPos

    function runcmd(cmd: string): boolean
    function runcmdEx(cmd: string): { success: boolean, output: string }
    function regPlayerCmd(cmd: string, description: string, callback: (player: Player, args: string[]) => void, level: PermissionID): boolean
    function regConsoleCmd(cmd: string, description: string, callback: (args: string[]) => void): boolean
    function sendCmdOutput(output: string): boolean

    function getPlayer(info: string): Player | undefined
    function getOnlinePlayers(): Player[]
    function broadcast(msg: string, type?: MessageID): boolean

    function getBlock(pos: IntPos): Block
    function getBlock(x: Integer, y: Integer, z: Integer, dimid: DimensionID): Block
    function setBlock(pos: IntPos, block: Block): boolean
    function setblock(x: Integer, y: Integer, z: Integer, dimid: DimensionID, block: Block): Block
    function spawnParticle(pos: IntPos | FloatPos, type: string): boolean
    function spawnParticle(x: Integer, y: Integer, z: Integer, dimid: DimensionID, type: string): boolean

    function spawnMob(name: string, pos: IntPos | FloatPos): Entity
    function spawnMob<T extends Integer | Float>(name: string, x: T, y: T, z: T, dimid: DimensionID): Entity | undefined
    function explode(pos: IntPos | FloatPos, source: Entity | undefined, power: Float, range: Float, isDestroy: boolean, isFire: boolean): boolean
    function explode<T extends Integer | Float>(x: T, y: T, z: T, dimid: DimensionID, source: Entity | undefined, power: Float, range: Float, isDestroy: boolean, isFire: boolean): boolean

    function newItem(name: string, count: Integer): Item | undefined
    function newItem(nbt: NbtCompound): Item | null
    function spawnItem(item: Item, pos: IntPos | FloatPos): Entity | undefined
    function spawnItem<T extends Integer | Float>(item: Item, x: T, y: T, z: T, dimid: DimensionID): Entity | undefined

    function newScoreObjective(name: string, displayName: string): Objective | undefined
    function getScoreObjective(name: string): Objective | undefined
    function getAllScoreObjectives(): Objective[]
    function getDisplayObjective(slot: "sidebar" | "belowname" | "list"): Objective | undefined

    function removeScoreObjective(name: string): boolean
    function clearDisplayObjective(slot: "sidebar" | "belowname" | "list"): boolean

    function getBDSVersion(): string
    function setMotd(motd: string): boolean

    function listen(event: string, callback: (...args: any[]) => boolean | void): boolean

    function newSimpleForm(): SimpleForm
    function newCustomForm(): CustomForm
}
export namespace NBT {
    function createTag(type: any, data?: any): NbtValue | NbtList | NbtCompound | undefined
    function parseSNBT(snbt: string): NbtCompound | undefined
    function parseBinaryNBT(nbt: ArrayBuffer): NbtCompound | undefined
}
export namespace logger {
    function setConsole(isOpen: boolean, logLevel: number): void
    function setFile(filePath: string, logLevel: number): void
    function setPlayer(player: Player, logLevel: number): void
    function log(...args: any[]): void
    function debug(...args: any[]): void
    function info(...args: any[]): void
    function warn(...args: any[]): void
    function error(...args: any[]): void
    function fatal(...args: any[]): void
    function setTitle(title: string): void
    function setLogLevel(level: LogLevel): void
}
export namespace lxl {
    function version(): {
        major: Integer
        minor: Integer
        revision: Integer
        isBeta: boolean
    }
    function requireVersion(major: Integer, minor?: Integer, revision?: Integer): boolean
    function listPlugins(): string[]
    // function export(func: (...args: any[]) => any, name: string) => boolean
    // function import(name: string): (...args: any[]) => any
    function require(path: string, remotePath?: string): boolean
    // function eval(str: string): any

    function loadLangPack(path: string): Integer | undefined
}
export namespace data {
    function openConfig(path: string, format?: "json", _default?: string): JSONConf | undefined
    function openConfig(path: string, format: "ini", _default?: string): INIConf | undefined

    function openDB(dir: string): DB | undefined

    function name2xuid(name: string): string | undefined
    function xuid2name(xuid: string): string | undefined

    function toJson(_var: any, space?: Integer): string | undefined
    function parseJson(json: string): any
    function toMD5(str: string): string
    function toSHA1(str: string): string
}
export namespace money {
    function set(xuid: string, money: Integer): boolean
    function get(xuid: string): Integer
    function add(xuid: string, money: Integer): boolean
    function reduce(xuid: string, money: Integer): boolean
    function trans(xuid1: string, xuid2: string, money: Integer, note?: string): boolean
    function getHistory(xuid: string, time: Integer): Array<{
        from: string
        to: string
        money: Integer
        time: string
        note: string
    }>
    function clearHistory(time: Integer): boolean
}
export namespace file {
    const ReadMode
    const WriteMode
    const AppendMode
    function readFrom(path: string): string | undefined
    function writeTo(path: string, text: string): boolean
    function writeLine(path: string, text: string): boolean

    function open(path: string, mode: any, isBinary?: boolean): File | undefined
}
export namespace network {
    function httpGet(url: string, callback: (status: Integer, result: string | -1) => void): boolean
    function httpPost(url: string, data: string, type: string, callback: (status: Integer, result: string | -1) => void): boolean
    function newWebsocket(): WSClient
}
export namespace system {
    function cmd(cmd: string, callback: (exitcode: Integer, output: string) => void, timeLimit?: Integer): boolean
    function newProcess(process: string, callback: (exitcode: Integer, output: string) => void, timeLimit?: Integer): boolean

    function getTimeStr(): string
    function getTimeObj(): {
        Y: Integer
        M: Integer
        D: Integer
        h: Integer
        m: Integer
        s: Integer
        ms: Integer
    }
    function randomGuid(): string
}